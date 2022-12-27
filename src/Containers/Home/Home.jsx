import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"


function Home(props) {

    const navigate = useNavigate()

    return (
        <div className='vh-100 d-flex justify-content-center align-items-center bg-white2 flex-column'>
            <h1 className='darkBlue ff-subTitle fw-bolder fs-big'>Weather Now</h1>
            <p className='purple ff-subTitle fw-bolder fs-medium'>The weather app you need</p>
            <div className='dashboardButton bg-green white2 d-flex align-items-center justify-content-center'>
                <p className='ff-subtitle pt-3 pointer fw-bold' onClick={() => navigate("/dashboard")}>Dashboard</p>
            </div>
        </div>
    );
}

export default Home;