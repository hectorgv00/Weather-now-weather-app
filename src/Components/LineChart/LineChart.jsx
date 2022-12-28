import React, { useEffect, useState } from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ forecastData, type }) {
  // The dates from the data will be soraged here
  const [dates, setDates] = useState([]);
  // Depending on the type, the data received from the API will be stored in one of the below
  const [dataType1, setDataType1] = useState([]);
  const [dataType2, setDataType2] = useState([]);
  // Sets the chart structure
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

  // Filtering the data so we can map the information that we need to show
  useEffect(() => {
    let list = forecastData?.list;
    let filteredDates = list?.filter((l, index) => index % 4);
    setDates(filteredDates?.map((l) => l.dt_txt.slice(5, 16)));
    setDataType1(filteredDates?.map((date) => date.main.humidity));
    setDataType2(filteredDates?.map((date) => date.wind.speed));
  }, [forecastData]);

  // Filling the Chart
  useEffect(() => {
    switch (type) {
      case "humidity":
        setLineChar({
          labels: dates,
          datasets: [
            {
              label: `Humidity in ${forecastData?.city?.name} in %`,
              data: dataType1,
              fill: {
                target: "origin",
                above: "rgba(128, 93, 243, .5)",
                below: "#18ceab",
              },
              backgroundColor: "#B0413E",
              tension: 0.1,
            },
          ],
        });
        break;

      case "wind":
        setLineChar({
          labels: dates,
          datasets: [
            {
              label: `Wind speed in ${forecastData?.city?.name} in m/s`,
              data: dataType2,
              fill: {
                target: "origin",
                above: "rgba(24, 206, 171, .5)",
                below: "#18ceab",
              },
              backgroundColor: "#2D3686",
              tension: 0.1,
            },
          ],
        });
      default:
        break;
    }
  }, [dataType2, dataType1]);

  // If forecastData was undefined, a spinner would appear
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
