import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getApiForectast, getApiWeather } from "../../Services/Services";
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart() {
  const [weatherData, setWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [isLoadingWeather, setIsLoadingWeather] = useState(true);
  const [isLoadingForecast, setIsLoadingForecast] = useState(true);
  const [flag, setFlag] = useState(true);

  const data = {
    labels: "labels",
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  useEffect(() => {
    getApiWeather("Valencia,spain")
      .then((data) => setWeatherData(data))
      .then(setIsLoadingWeather(false));
  }, [flag]);

  useEffect(() => {
    getApiForectast("Valencia,spain")
      .then((data) => setForecastData(data))
      .then(setIsLoadingForecast(false));
  }, [flag]);

  if (isLoadingWeather || isLoadingForecast) {
    return (
      <div className="d-flex vh-100 align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Bar className="percentage100"
      data={data}
      />
    </>
  );
}

export default BarChart;
