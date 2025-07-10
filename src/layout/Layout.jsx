import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const Layout = () => {
  /**
   * State to manage the toggled (expanded/collapsed) state of the entire sidebar.
   * @type {[boolean, Function]}
   */
  const [isSideBarToggled, setIsSideBarToggled] = useState(true);

  const [pageName, setPageName] = useState("");

  return (
    <>
      <div className="flex w-screen min-h-screen">
        <Sidebar
          isSideBarToggled={isSideBarToggled}
          setIsSideBarToggled={setIsSideBarToggled}
          setPageName={setPageName}
        />
        <div
          className={`flex flex-col bg-gray-300  ${
            isSideBarToggled
              ? "lg:w-[cal(100%-280px)] "
              : "lg:w-[cal(100%-80px)]  "
          } flex-grow-1`}
        >
          <NavBar
            isSideBarToggled={isSideBarToggled}
            setIsSideBarToggled={setIsSideBarToggled}
            pageName={pageName}
          />
          <main className="p-2 m-2 border-2 overflow-x-hidden   border-gray-900 rounded-lg flex-grow-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
