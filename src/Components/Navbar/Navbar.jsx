import React from 'react';
import "./Navbar.css"
import logo from "../../resources/weather.png"
import { useNavigate } from "react-router-dom";


function Navbar(props) {
    const navigate = useNavigate();

    return (
        <div className='d-flex align-items-center navbarDesign bg-white2 ps-3 justify-content-between'>
            <div className='d-flex align-items-center'>
            <img src={logo} alt="logo weather now" className='imgDesign pointer' onClick={() => navigate("/")} />
            <p className='fs-3 darkBlue ff-subTitle pt-3 fw-bold pointer' onClick={() => navigate("/")}>WEATHER NOW</p>
            </div>
            <div className='pe-3 pointer' onClick={()=> navigate("/dashboard")}>
                <p className='fs-3 pt-3 purple ff-title fw-bolder'>Dashboard</p>
            </div>
        </div>
    );
}

export default Navbar;