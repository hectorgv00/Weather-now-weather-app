import axios from "axios"

const API_URL_FORECAST = "http://api.openweathermap.org/data/2.5/forecast?q=" 
const API_URL_WEATHER = "http://api.openweathermap.org/data/2.5/weather?q=" 
const API_KEY = "&appid=cdfd0d9a7c1f33c293edfaeef24004db"

export const  getApi = async (place) =>{
    try{

        let resp = await axios.get(`${API_URL_WEATHER}${place}${API_KEY}`);
        console.log(resp)
    } catch(error){
        console.log(error)
    }
}