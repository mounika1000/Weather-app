import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function InfoBox({ info }) {
    let init_Url;

    if (info.temp < 10) {
       
        init_Url = "https://images.unsplash.com/photo-1535025075092-5a1cf795130b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JTJGJTJGJTIwQ29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    } else if (info.temp >= 10 && info.temp < 25) {
       
        init_Url = "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JTJGJTJGJTIwTW9kZXJhdGUlMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
    } else {
     
        init_Url = "https://images.unsplash.com/photo-1565309503881-b823e488227a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    }

    return (
        <div className="InfoBox">
            <h1>Weather Info - {info.weather}</h1>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={init_Url}
                        title="Weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>
                                Temperature = {info.temp}&deg;C
                            </p>
                            <p>
                                Humidity = {info.humidity}%
                            </p>
                            <p>
                                Min Temp = {info.tempMin}&deg;C
                            </p>
                            <p>
                                Max Temp = {info.tempMax}&deg;C
                            </p>
                            <p>
                                The Weather feels like = {info.feelsLike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
