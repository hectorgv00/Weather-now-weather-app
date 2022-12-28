import React, { useEffect, useState } from "react";
import "./Dashboard.css"
import BarChart from "../../Components/BarChart/BarChart";
import LineChart from "../../Components/LineChart/LineChart";
import { getApiForectast } from "../../Services/Services";

function Dashboard(props) {

  const [forecastData, setForecastData] = useState([]);


  const city = "Madrid,spain"


  useEffect(() => {
    getApiForectast(city)
      .then((data) => setForecastData(data))
  }, [city]);


    return (
      <div className="container-fluid vh-100">
        <div className="row">
          
          <div className="col-md-6 vh-40 d-flex align-items-center justify-content-center bg-white2">
              <BarChart city={city} forecastData={forecastData} />
          </div>
          

          <div className="col-md-6 vh-40  d-flex align-items-center justify-content-center bg-white2">
            <LineChart city = {city} forecastData={forecastData} className="percentage100"/>
          </div>
          
        </div>

        <div className="row">
          
          <div className="col-md-6 vh-40 d-flex align-items-center justify-content-center bg-white2">
              <BarChart city={city}  forecastData={forecastData} />
          </div>
          

          <div className="col-md-6 vh-40 d-flex align-items-center justify-content-center bg-white2">
              <BarChart city={city}  forecastData={forecastData} />
          </div>
          
        </div>
      </div>
    );
  // }
}

export default Dashboard;
