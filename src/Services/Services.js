import axios from "axios";

// Saving the API route in a constant, so if it needs to be changed it can be easily done
const API_URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_KEY = "&appid=cdfd0d9a7c1f33c293edfaeef24004db";

// This function calls the API and returns the obtained data
export const getApiForectast = async (place) => {
  try {
    let resp = await axios.get(`${API_URL_FORECAST}${place}${API_KEY}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
