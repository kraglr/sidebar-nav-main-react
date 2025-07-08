import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

const Layout = () => {
  /**
   * State to manage the toggled (expanded/collapsed) state of the entire sidebar.
   * @type {[boolean, Function]}
   */
  const [isSideBarToggled, setIsSideBarToggled] = useState(true);

  return (
    <>
      <div className="flex">
        <Sidebar
          isSideBarToggled={isSideBarToggled}
          setIsSideBarToggled={setIsSideBarToggled}
        />
        <div
          className={`flex flex-col   ${
            isSideBarToggled
              ? "lg:w-[cal(100%-280px)] "
              : "lg:w-[cal(100%-80px)]  "
          } w-full `}
        >
          <NavBar
            isSideBarToggled={isSideBarToggled}
            setIsSideBarToggled={setIsSideBarToggled}
          />
          <main className="bg-amber-100">asdasd</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
