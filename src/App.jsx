import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Layout from "./layout/Layout";
import { LoadingThreeDots } from "./components/Loader";
import PatientInformation from "./Pages/PatientRegistration/PatientInformation";

const Dashboard = lazy(() => import("./Pages/Home/Dashboard"));
const PatientRegistration = lazy(() =>
  import("./Pages/PatientRegistration/PatientRegistration")
);

/**
 * The main application component.
 * It sets up the routing for the entire application using React Router.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <>
      <Suspense fallback={<LoadingThreeDots />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/patient-registration"
                element={<PatientRegistration />}
              />
              <Route
                path="/patient-information/:action/:mrnSelected/:caseType"
                element={<PatientInformation />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
