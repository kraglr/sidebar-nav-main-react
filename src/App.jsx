import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Layout from "./layout/Layout";
import Dashboard from "./Pages/Home/Dashboard";
import PatientRegistration from "./Pages/PatientRegistration/PatientRegistration";

/**
 * The main application component.
 * It sets up the routing for the entire application using React Router.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/patient-registration"
              element={<PatientRegistration />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
