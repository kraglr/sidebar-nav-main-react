import React, { useState } from "react";

import { useNavigate } from "react-router";
import * as MuiIcons from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

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

/**
 * Renders the third level of the menu (child menu).
 * @param {object} props - The component props.
 * @param {object} props.subItem - The menu item object which contains a submenu to be rendered as a child menu.
 * @returns {JSX.Element} The rendered child menu list.
 */
const ChildMenu = ({ subItem, navigate, setPageName }) => {
  return (
    <>
      <ul className="list-none pl-8 ">
        {subItem.submenu.map((childItem, childIdx) => {
          return (
            <li
              key={`${childIdx}-${childItem.label}`}
              className="px-2 py-1 bg-gray-600 hover:bg-gray-900 cursor-pointer"
              role="button"
              onClick={() => {
                navigate(childItem.route);
                setPageName(childItem.label);
              }}
            >
              {childItem.label}
            </li>
          );
        })}
      </ul>
    </>
  );
};

/**
 * Renders the second level of the menu (submenu).
 * It can also contain and render a third level (child menu).
 * @param {object} props - The component props.
 * @param {object} props.item - The parent menu item containing the submenu to render.
 * @param {boolean} props.isSideBarToggled - Flag indicating if the main sidebar is toggled open.
 * @param {Function} props.toggleChildMenu - Function to toggle the visibility of a child menu.
 * @param {object} props.openChildMenu - State object indicating which child menus are open.
 * @returns {JSX.Element} The rendered submenu list.
 */
const SubMenu = ({
  item,
  isSideBarToggled,
  toggleChildMenu,
  openChildMenu,
  navigate,
  setPageName,
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
                  } else {
                    navigate(subItem.route);
                    setPageName(subItem.label);
                  }
                }}
              >
                <span>{subItem.label}</span>
                {hasChildMenu && <ArrowDropDownIcon />}
              </li>

              {hasChildMenu && openChildMenu[subIdx] && (
                <ChildMenu
                  subItem={subItem}
                  navigate={navigate}
                  setPageName={setPageName}
                />
              )}
            </>
          );
        })}
      </ul>
    </>
  );
};

/**
 * The main Sidebar component.
 * It renders a collapsible navigation menu with multiple levels.
 * It manages its own state for toggling the sidebar and opening/closing submenus.
 * @returns {JSX.Element} The rendered Sidebar component.
 */
const Sidebar = ({ isSideBarToggled, setIsSideBarToggled, setPageName }) => {
  const navigate = useNavigate();

  /**
   * State to manage the open/closed status of the first-level submenus.
   * The key is the index of the menu item, and the value is a boolean.
   * Allows only one submenu to be open at a time.
   * @type {[object, Function]}
   */
  const [openSubMenu, setOpenSubMenu] = useState({});

  /**
   * State to manage the open/closed status of the second-level submenus (child menus).
   * The key is the index of the submenu item, and the value is a boolean.
   * Allows only one child menu to be open at a time.
   * @type {[object, Function]}
   */
  const [openChildMenu, setOpenChildMenu] = useState({});

  /**
   * Toggles the visibility of a first-level submenu.
   * Closes any currently open submenu before opening a new one.
   * @param {number} index - The index of the menu item to toggle.
   */
  const toggleSubMenu = (index) => {
    setOpenSubMenu((prev) => {
      const isCurrentlyOpen = !!prev[index];
      return isCurrentlyOpen ? {} : { [index]: true };
    });
  };
  /**
   * Toggles the visibility of a second-level submenu (child menu).
   * Closes any currently open child menu before opening a new one.
   * @param {number} index - The index of the submenu item to toggle.
   */
  const toggleChildMenu = (index) => {
    setOpenChildMenu((prev) => {
      const isCurrentlyOpen = !!prev[index];
      return isCurrentlyOpen ? {} : { [index]: true };
    });
  };

  return (
    <>
      <aside
        className={` flex flex-col lg:relative fixed   bg-gray-900 text-white h-screen lg:overflow-x-visible overflow-x-auto  py-2 transition-all duration-300 ease-in-out  ${
          isSideBarToggled
            ? "w-[280px] px-2"
            : "lg:w-[80px] lg:px-2  w-[0px] px-0 "
        }`}
      >
        <div
          className={`flex overflow-x-visible  items-center py-1 align-middle  ${
            isSideBarToggled
              ? "border-b-1 border-b-gray-100 lg:justify-center justify-between"
              : ""
          }`}
        >
          <h4
            className={`${
              isSideBarToggled ? "visible" : "lg:invisible visible"
            }`}
          >
            CareTeQ
          </h4>
          <span
            className="cursor-pointer lg:hidden block"
            onClick={() => setIsSideBarToggled(!isSideBarToggled)}
          >
            <ClearIcon />
          </span>
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
                      } else {
                        navigate(item.route);
                        setPageName(item.label);
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
                      navigate={navigate}
                      key={id}
                      setPageName={setPageName}
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
