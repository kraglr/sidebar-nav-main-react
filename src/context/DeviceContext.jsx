import React, { createContext, useState, useEffect, useContext } from "react";

const DeviceContext = createContext();

export const DeviceContextProvider = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkIfDesktop = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;

      const isSmallScreen = window.matchMedia("(max-width: 1024px)").matches;

      setIsDesktop(!isTouch && !isSmallScreen);
    };
    checkIfDesktop();

    window.addEventListener("resize", checkIfDesktop);
    return () => {
      window.removeEventListener("resize", checkIfDesktop);
    };
  }, []);

  return (
    <DeviceContext.Provider value={{ isDesktop }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => useContext(DeviceContext);
