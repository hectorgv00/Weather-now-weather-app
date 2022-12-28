import React, { useEffect, useState } from "react";
import "./BarChart.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart({ forecastData }) {
  // The dates from the data will be soraged here
  const [dates, setDates] = useState([]);
  // The data received from the API will be stored in data
  const [data, setData] = useState([]);
  // Sets the chart structure
  const [barChar, setBarChar] = useState({
    labels: "",
    datasets: [
      {
        label: ``,
        data: data,
        backgroundColor: [""],
        borderColor: [""],
        borderWidth: 1,
      },
    ],
  });

  // Filtering the data so we can map the information that we need to show
  useEffect(() => {
    let list = forecastData?.list;
    let filteredDates = list?.filter((l, index) => index % 4);
    setDates(filteredDates?.map((l) => l.dt_txt.slice(5, 16)));
    setData(filteredDates?.map((date) => date.main.temp - 273.15));
  }, [forecastData]);

  // Filling the Chart
  useEffect(() => {
    setBarChar({
      labels: dates,
      datasets: [
        {
          label: `Temperature in ${forecastData?.city?.name}`,
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [data]);

  // If forecastData was undefined, a spinner would appear
  if (!forecastData) {
    return (
      <div className="d-flex vh-100 align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <>
      <Bar data={barChar} />
    </>
  );
}

export default BarChart;
