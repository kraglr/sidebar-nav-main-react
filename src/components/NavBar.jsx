import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
const NavBar = ({ isSideBarToggled, setIsSideBarToggled }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsDesktop]);

  return (
    <>
      <div className="flex bg-gray-900 w-full px-1 py-2">
        <div className="flex justify-start">
          <span
            className="cursor-pointer"
            onClick={() => setIsSideBarToggled(!isSideBarToggled)}
          >
            {isDesktop ? (
              isSideBarToggled ? (
                <ArrowLeftIcon />
              ) : (
                <ArrowRightIcon />
              )
            ) : (
              <MenuIcon />
            )}
          </span>
          {/* <span
            className="lg:block hidden cursor-pointer"
            onClick={() => setIsSideBarToggled(!isSideBarToggled)}
          >
            {isSideBarToggled ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          </span>

          <span className="lg:hidden block">
            <MenuIcon
              className="cursor-pointer"
              onClick={() => setIsSideBarToggled(!isSideBarToggled)}
            />
          </span> */}
          <span>Page</span>
        </div>
        <div className="flex"></div>
      </div>
    </>
  );
};

export default NavBar;
