import React, { createContext, useState, useEffect, useContext } from "react";
const SideBarContext = createContext();

export const SideBarContextProvider = ({ children }) => {
  const [isSideBarToggled, setIsSideBarToggled] = useState(true);

  return (
    <SideBarContext.Provider value={{ isSideBarToggled, setIsSideBarToggled }}>
      {children}
    </SideBarContext.Provider>
  );
};

// Custom hook for easy consumption of the context
export const toggleSideBar = () => useContext(SideBarContext);
