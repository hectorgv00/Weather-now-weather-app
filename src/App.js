import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Containers/Dashboard/Dashboard";
import { CityContext } from "./Services/CityContext";
import { useState } from "react";

function App() {
  // Setting context useState and setting the default data as "Valencia,spain"
  const [context, setContext] = useState("Valencia,spain");

  return (
    <>
      <BrowserRouter>
        {/* Envolving every container with the provider so it can be reached from any point */}
        <CityContext.Provider value={{ context, setContext }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </CityContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
