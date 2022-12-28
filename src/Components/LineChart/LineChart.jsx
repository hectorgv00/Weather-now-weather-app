import React, { useEffect, useState } from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ forecastData }) {
  const [dates, setDates] = useState([]);
  const [data, setData] = useState([]);
  const [lineChart, setLineChar] = useState({
    labels: "",
    datasets: [
      {
        label: `Temperature in ${forecastData?.city?.name} in ºC`,
        data: "",
        fill: {
          target: "",
          above: "",
          below: "",
        },
        borderColor: "",
        tension: 0.1,
      },
    ],
  });

  let options = {
    responsive: true,
  };

  useEffect(() => {
    let list = forecastData?.list;
    let filteredDates = list?.filter((l, index) => index % 4);
    setDates(filteredDates?.map((l) => l.dt_txt.slice(5, 16)));
    setData(filteredDates?.map((date) => date.main.humidity));
    console.log(filteredDates);
    console.log(dates);
  }, [forecastData]);

  useEffect(() => {
    setLineChar({
      labels: dates,
      datasets: [
        {
          label: `Humidity in ${forecastData?.city?.name} in %`,
          data: data,
          fill: {
            target: "origin",
            above: "rgba(128, 93, 243, .5)",
            below: "#18ceab",
          },
          backgroundColor: "#B0413E",
          tension: 0.1
        },
      ],
    });
  }, [data]);

  if (forecastData === undefined) {
    return (
      <div className="d-flex vh-100 align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <>
      <Line data={lineChart} options={options} />
    </>
  );
}

export default LineChart;
