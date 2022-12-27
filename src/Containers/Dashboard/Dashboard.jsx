import React, { useEffect, useState } from 'react';
import BarChart from '../../Components/BarChart/BarChart';
import { getApiWeather, getApiForectast } from '../../Services/Services';

function Dashboard(props) {

     const [weatherData, setWeatherData] = useState([])
     const [forecastData, setForecastData] = useState([])
     const [isLoading, setIsLoading] = useState(true);
     const [flag, setFlag] = useState(true)


    useEffect(()=> {
        getApiWeather("Valencia,spain").then(data => setWeatherData(data)).then(setIsLoading(false))
        ;
    },[flag])

    useEffect(()=>{
        getApiForectast("Valencia,spain").then(data => setForecastData(data)).then(setIsLoading(false))
    },[flag])

    if (isLoading) {
        return(
        <div className='d-flex vh-100 align-items-center justify-content-center'>

        <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
        </div>
      )
    } else {

        return (
    
    
    
            <div className='vh-100 d-flex align-items-center justify-content-center bg-white2'>
                {/* <BarChart data={forecastData} options = {"o"} /> */}
                <div>
                    <p>
                        
                  Eyey
                        </p>
                </div>
            </div>
        );
    }


}

export default Dashboard;