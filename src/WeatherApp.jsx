import {useState} from "react";
import SearchBox from "./SearchBox";
import InfoBox from './infoBox';
export default function WeatherApp(){
    const [weatherInfo,SetWeatherInfo]=useState({
        city:"guntur",   
        feelsLike: 35.94,
        humidity: 89,
        temp: 28.94,
        tempMax: 28.94,
        tempMin: 28.94,
        weather: "overcast clouds"
    })
    let updateInfo=(result)=>{
        SetWeatherInfo(result);
    

    }
    return <div>
        <h2 style={{textAlign:"center"}}>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo} />
    </div>
}