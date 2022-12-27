import axios from "axios"

const APIURL:string = "http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=35&appid=cdfd0d9a7c1f33c293edfaeef24004db" 

export async function getApi <T> (){
    let resp = await axios.get(APIURL);
    console.log(resp)
}