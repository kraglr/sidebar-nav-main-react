import React, { useState } from "react";
import * as MuiIcons from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MenuIcon from "@mui/icons-material/Menu";
const menuItems = [
  {
    label: "Dashboard",
    route: "/dashboard",
    icon: "Dashboard",
  },
  {
    label: "Patient Registration",
    route: "/patient-registration",
    icon: "NoteAdd",
  },
  {
    label: "Inpatient",
    route: "",
    icon: "Hotel",
    submenu: [
      {
        label: "Inpatient List",
        route: "/inpatient-list",
      },
      {
        label: "Report List",
        route: "/report-list",
      },
    ],
  },
  {
    label: "Billing",
    route: "",
    icon: "Calculate",
    submenu: [
      {
        label: "Transaction List",
        route: "/tansaction-list/:billing",
      },
      {
        label: "Billing Incoming",
        route: "/billing/billing-incoming-list",
        submenu: [
          {
            label: "Transaction List",
            route: "/tansaction-list/:billing",
          },
          {
            label: "Billing Incoming",
            route: "/billing/billing-incoming-list",
          },
        ],
      },
    ],
  },

  {
    label: "Inventory",
    route: "",
    icon: "Inventory",
    submenu: [
      {
        label: "Item Master Data",
        route: "/inventory/item-master-data",
      },
      {
        label: "Item Management",
        route: "/inventory/item-management",
      },
      {
        label: "Item Transactions",
        route: "/inventory/item-transactions",
      },
      {
        label: "Repacking",
        route: "/inventory/repacking",
      },
      {
        label: "Inter Branch",
        route: "/inventory/inter-branch",
      },
      {
        label: "Pick and Pack",
        route: "/inventory/pick-and-pack",
      },
    ],
  },
  {
    label: "Users",
    route: "/users",
    icon: "Group",
  },
  {
    label: "Tools",
    route: "/tools",
    icon: "Settings",
    submenu: [
      { label: "Theme Configuration", route: "tools/theme-configuration" },
    ],
  },
  {
    label: "Purchasing",
    route: "/purchasing",
    icon: "ShoppingCart",
    submenu: [
      { label: "Purchase Request", route: "/Purchasing/purchase-request" },
      { label: "Purchase Order", route: "/Purchasing/purchase-order" },
      { label: "Goods Receipt", route: "/Purchasing/goods-receipt" },
      { label: "Goods Return", route: "/Purchasing/goods-return" },
    ],
  },
];

const ChildMenu = ({ subItem }) => {
  return (
    <>
      <ul className="list-none pl-8 ">
        {subItem.submenu.map((childItem, childIdx) => {
          return (
            <li
              key={`${childIdx}-${childItem.label}`}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-900 cursor-pointer"
              role="button"
            >
              {childItem.label}
            </li>
          );
        })}
      </ul>
    </>
  );
};
const SubMenu = ({
  item,
  isSideBarToggled,
  toggleChildMenu,
  openChildMenu,
}) => {
  return (
    <>
      <ul
        className={`list-none py-1 px-2  z-99 transition-all duration-300 ease-in-out  ${
          isSideBarToggled
            ? "pl-8 bg-gray-700"
            : "lg:absolute lg:left-22 relative bg-gray-900"
        }`}
      >
        {item.submenu.map((subItem, subIdx) => {
          const hasChildMenu = !!subItem.submenu;
          return (
            <>
              <li
                key={`${subIdx}-${subItem.label}`}
                className="flex  px-2 py-1 hover:bg-gray-900 justify-between"
                onClick={() => {
                  if (hasChildMenu) {
                    toggleChildMenu(subIdx);
                  }
                }}
              >
                <span>{subItem.label}</span>
                {hasChildMenu && <ArrowDropDownIcon />}
              </li>

              {hasChildMenu && openChildMenu[subIdx] && (
                <ChildMenu subItem={subItem} />
              )}
            </>
          );
        })}
      </ul>
    </>
  );
};
const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState({});
  const [isSideBarToggled, setIsSideBarToggled] = useState(true);

  const [openChildMenu, setOpenChildMenu] = useState({});

  const toggleSubMenu = (index) => {
    setOpenSubMenu((prev) => {
      const isCurrentlyOpen = !!prev[index];
      return isCurrentlyOpen ? {} : { [index]: true };
    });
  };
  const toggleChildMenu = (index) => {
    console.log(index);

    setOpenChildMenu((prev) => {
      const isCurrentlyOpen = !!prev[index];
      return isCurrentlyOpen ? {} : { [index]: true };
    });
  };

  return (
    <>
      <aside
        className={` flex flex-col lg:relative fixed   bg-gray-900 text-white min-h-screen lg:overflow-x-visible overflow-x-auto  py-4  transition-all duration-300 ease-in-out  ${
          isSideBarToggled
            ? "w-[280px] px-2"
            : "lg:w-[80px] lg:px-2  w-[0px] px-0 "
        }`}
      >
        <div
          className={`flex overflow-x-visible items-center mb-4 ${
            isSideBarToggled ? "justify-between" : "justify-center"
          }`}
        >
          {isSideBarToggled && <h4>CareTeQ</h4>}
          <MenuIcon
            className="cursor-pointer"
            onClick={() => setIsSideBarToggled(!isSideBarToggled)}
          />
        </div>
        <ul className="list-none ">
          {menuItems.map((item, id) => {
            const Icon = MuiIcons[item.icon];
            const hasSubMenu = !!item.submenu;
            return (
              <>
                <li
                  key={`${id}-${item.label}`}
                  className={`${
                    isSideBarToggled ? "px-2" : "px-1 items-center"
                  } py-1 flex flex-col cursor-pointer hover:bg-gray-700 hover:text-white  align-middle`}
                  role="button"
                >
                  <div
                    className={`flex flex-row  justify-between`}
                    onClick={() => {
                      if (hasSubMenu) {
                        toggleSubMenu(id);
                      }
                    }}
                  >
                    <div
                      className={`flex  ${
                        isSideBarToggled
                          ? "flex-row space-x-2 "
                          : "flex-col space-y-1 items-center"
                      }`}
                    >
                      <Icon />
                      <span
                        className={`text-center ${
                          isSideBarToggled ? "text-md" : "text-xs"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {hasSubMenu &&
                      isSideBarToggled &&
                      (openSubMenu[id] ? (
                        <ArrowDropUpIcon />
                      ) : (
                        <ArrowDropDownIcon />
                      ))}
                  </div>

                  {hasSubMenu && openSubMenu[id] && (
                    <SubMenu
                      item={item}
                      isSideBarToggled={isSideBarToggled}
                      toggleChildMenu={toggleChildMenu}
                      openChildMenu={openChildMenu}
                    />
                  )}
                </li>
              </>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
