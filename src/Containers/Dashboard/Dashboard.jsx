import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import BarChart from "../../Components/BarChart/BarChart";
import LineChart from "../../Components/LineChart/LineChart";
import { getApiForectast } from "../../Services/Services";
import DoubleBarChart from "../../Components/DoubleBarChart/DoubleBarChart";
import { CityContext } from "../../Services/CityContext";

function Dashboard() {
  // Receiving context and setContext from the provider so they can be used in this file
  const { context, setContext } = useContext(CityContext);
  // The data received from the API is stored in forecastData
  const [forecastData, setForecastData] = useState([]);

  // Getting the choosen city from localStorage, so even if the site is refreshed, the information will still appear
  const cityLocalStorage = localStorage.getItem("city");
  const city = cityLocalStorage || context;

  // Getting the data from the API and storing it in forecastData
  useEffect(() => {
    getApiForectast(city).then((data) => setForecastData(data));
  }, [city]);

  // Setting the city in the localStorage and in Context
  const setCity = (city) => {
    localStorage.removeItem(city)
    localStorage.setItem("city", city);
    setContext(city);
  };

  return (
    <div className="container-fluid bg-white2">
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-around align-items-center rowDesign">
          {/* Buttons */}
          <p
            className="linkDesign d-flex align-items-center justify-content-center text-center pointer ff-title white2"
            onClick={() => setCity("Valencia,spain")}
          >
            Valencia
          </p>
          <p
            className="linkDesign d-flex align-items-center justify-content-center text-center pointer ff-title white2"
            onClick={() => setCity("Madrid,spain")}
          >
            Madrid
          </p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-around align-items-center rowDesign">

          <p
            className="linkDesign d-flex align-items-center justify-content-center text-center pointer ff-title white2"
            onClick={() => setCity("London,uk")}
          >
            London
          </p>
          <p
            className="linkDesign d-flex align-items-center justify-content-center text-center pointer ff-title white2"
            onClick={() => setCity("Dubai, AE")}
          >
            Dubai
          </p>
        </div>
      </div>
      <div className="row">
        {/* Charts */}
        <div className="col-md-6 vh-40 d-flex align-items-center justify-content-center bg-white2">
          <BarChart city={city} forecastData={forecastData} />
        </div>

        <div className="col-md-6 vh-40  d-flex align-items-center justify-content-center bg-white2">
          <LineChart
            city={city}
            forecastData={forecastData}
            type={"humidity"}
            option={"main"}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 vh-40 d-flex align-items-center justify-content-center bg-white2">
          <DoubleBarChart city={city} forecastData={forecastData} />
        </div>

        <div className="col-md-6 vh-40 d-flex align-items-center justify-content-center bg-white2">
          <LineChart city={city} forecastData={forecastData} type={"wind"} />
        </div>
      </div>
    </div>
  );
  // }
}

export default Dashboard;
