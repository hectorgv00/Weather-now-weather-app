import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Containers/Dashboard/Dashboard";
import { CityContext } from "./Services/CityContext";
import { useState } from "react";


function App() {

  const [context, setContext] = useState("Valencia,spain")

  return (
    <>
      <BrowserRouter>
        <CityContext.Provider value={{context, setContext}}>
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
