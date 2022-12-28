import axios from "axios";

const API_URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_URL_WEATHER = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=cdfd0d9a7c1f33c293edfaeef24004db";

export const getApiWeather = async (place) => {
  try {
    let resp = await axios.get(`${API_URL_WEATHER}${place}${API_KEY}`);
    return resp
  } catch (error) {
    console.log(error);
  }
}
;
export const getApiForectast = async (place) => {
  try {
    let resp = await axios.get(`${API_URL_FORECAST}${place}${API_KEY}`);
    return resp.data
  } catch (error) {
    console.log(error);
  }
};
