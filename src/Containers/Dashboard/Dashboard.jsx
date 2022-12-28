import React, { useEffect, useState } from "react";
import BarChart from "../../Components/BarChart/BarChart";
import { getApiWeather, getApiForectast } from "../../Services/Services";

function Dashboard(props) {

  const city = "Madrid,spain"


  // useEffect(() => {
  //   getApiWeather("Valencia,spain")
  //     .then((data) => setWeatherData(data))
  //     .then(setIsLoadingWeather(false));
  // }, [flag]);

  // useEffect(() => {
  //   getApiForectast("Valencia,spain")
  //     .then((data) => setForecastData(data))
  //     .then(setIsLoadingForecast(false));
  // }, [flag]);

  // if (isLoadingWeather || isLoadingForecast) {
  //   return (
  //     <div className="d-flex vh-100 align-items-center justify-content-center">
  //       <div className="spinner-border text-primary" role="status">
  //         <span className="sr-only"></span>
  //       </div>
  //     </div>
  //   );
  // } else {
    return (
      <div className="container-fluid vh-100">
        <div className="row">
          
          <div className="col-md-6 d-flex align-items-center justify-content-center bg-white2">
              <BarChart city={city} />
          </div>
          

          <div className="col-md-6 vh-25 d-flex align-items-center justify-content-center bg-white2">
              <BarChart city={city} />
          </div>
          
        </div>

        <div className="row">
          
          <div className="col-md-6 d-flex align-items-center justify-content-center bg-white2">
              <BarChart city={city} />
          </div>
          

          <div className="col-md-6 vh-25 d-flex align-items-center justify-content-center bg-white2">
              <BarChart city={city} />
          </div>
          
        </div>
      </div>
    );
  // }
}

export default Dashboard;
