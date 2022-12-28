import React, {  useContext, useEffect, useState } from "react";
import "./Dashboard.css"
import BarChart from "../../Components/BarChart/BarChart";
import LineChart from "../../Components/LineChart/LineChart";
import { getApiForectast } from "../../Services/Services";
import DoubleBarChart from "../../Components/DoubleBarChart/DoubleBarChart";
import { CityContext } from "../../Services/CityContext";


function Dashboard(props) {

  const {context, setContext} = useContext(CityContext)
  const [forecastData, setForecastData] = useState([]);
  const city = context  


  useEffect(() => {
    getApiForectast(city)
      .then((data) => setForecastData(data))
  }, [city]);


    return (
      <div className="container-fluid bg-white2">
        <div className="row">
          <div className="col-12 d-flex justify-content-around align-items-center rowDesign">
            <p className="linkDesign d-flex align-items-center justify-content-center text-center pointer ff-title white2" onClick={() => setContext("Valencia,spain")}>Valencia</p>
            <p className="linkDesign d-flex align-items-center justify-content-center text-center pointer ff-title white2" onClick={() => setContext("Madrid,spain")}>Madrid</p>
            <p className="linkDesign d-flex align-items-center justify-content-center text-center pointer ff-title white2" onClick={() => setContext("London,uk")}>London</p>
            <p className="linkDesign d-flex align-items-center justify-content-center text-center pointer ff-title white2" onClick={() => setContext("Dubai, AE")}>Dubai</p>
          </div>
        </div>
        <div className="row">
          
          <div className="col-md-6 vh-40 d-flex align-items-center justify-content-center bg-white2">
              <BarChart city={city} forecastData={forecastData} />
          </div>
          

          <div className="col-md-6 vh-40  d-flex align-items-center justify-content-center bg-white2">
            <LineChart city = {city} forecastData={forecastData} type = {"humidity"} option ={"main"}/>
          </div>
          
        </div>

        <div className="row">
          
          <div className="col-md-6 vh-40 d-flex align-items-center justify-content-center bg-white2">
              <DoubleBarChart city={city}  forecastData={forecastData} />
          </div>
          

          <div className="col-md-6 vh-40 d-flex align-items-center justify-content-center bg-white2">
          <LineChart city = {city} forecastData={forecastData} type = {"wind"} />
          </div>
          
        </div>
      </div>
    );
  // }
}

export default Dashboard;
