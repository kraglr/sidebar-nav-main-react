import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DeviceContextProvider } from "./context/DeviceContext.jsx";
import { ModalContextProvider } from "./context/ModalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DeviceContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </DeviceContextProvider>
  </StrictMode>
);
