import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const api_url = "https://api.openweathermap.org/data/2.5/weather";
    const api_key = "5c6fa5b2bd53ef84f0184be35f7241d6";
    let [city, SetCity] = useState("");
    let [error, SetError] = useState("");

    let getWeatherInfo = async () => {
        try {
            let res = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);

            if (!res.ok) {
                throw new Error("City not found");
            }

            let data = await res.json();

            let result = {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description
            };

            SetError(""); 
            return result;
        } catch (error) {
            SetError(error.message);
            return null;
        }
    };

    let handleChange = (event) => {
        SetCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        let result = await getWeatherInfo();
        if (result) {
            updateInfo(result);
        }
        SetCity("");
    };

    return (
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br /><br />
                <Button onClick={handleSubmit} variant="contained" type="submit">
                    Search
                </Button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
