import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Layout from "./layout/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
