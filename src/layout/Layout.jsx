import React from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <NavBar />
          <main>asdasd</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
