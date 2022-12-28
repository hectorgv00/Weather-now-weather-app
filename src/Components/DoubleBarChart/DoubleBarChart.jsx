import React, { useEffect, useState } from "react";
import "./DoubleBarChart.css";
import { Bar } from "react-chartjs-2";
import { getApiForectast } from "../../Services/Services";
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function DoubleBarChart({ forecastData }) {
  const [dates, setDates] = useState([]);
  const [dataTop, setDataTop] = useState([]);
  const [dataMin, setDataMin] = useState([]);
  const [isLoadingForecast, setIsLoadingForecast] = useState(true);
  const [barChar, setBarChar] = useState({
    labels: "",
    datasets: [
      {
        label: ``,
        data: "",
        backgroundColor: [""],
        borderColor: [""],
        borderWidth: 1,
      },
      {
        label: ``,
        data: "",
        backgroundColor: [""],
        borderColor: [""],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    let list = forecastData?.list;
    let filteredDates = list?.filter((l, index) => index % 4);
    setDates(filteredDates?.map((l) => l.dt_txt.slice(5, 16)));
    setDataTop(filteredDates?.map((date) => date.main.temp_max - 273.15));
    setDataMin(filteredDates?.map((date) => date.main.temp_min - 273.15))
  }, [forecastData]);

  useEffect(() => {
    setBarChar({
      labels: dates,
      datasets: [
        {
          label: `Maximum Temperature in ${forecastData?.city?.name} in ºC`,
          data: dataTop,
          backgroundColor: [
            "rgba(176, 65, 62, 0.7)",
          ],
          borderColor: [
            "rgba(176, 65, 62, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: `Minimum Temperature in ${forecastData?.city?.name} in ºC`,
          data: dataMin,
          backgroundColor: [
            "rgba(45, 54, 134, 0.7)",

          ],
          borderColor: [
            "rgba(45, 54, 134, 1)",

          ],
          borderWidth: 1,
        },
      ],
    });
  }, [dataTop]);

  if (forecastData === undefined) {
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

export default DoubleBarChart;
