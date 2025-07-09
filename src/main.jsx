import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DeviceContextProvider } from "./context/DeviceContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DeviceContextProvider>
      <App />
    </DeviceContextProvider>
  </StrictMode>
);
