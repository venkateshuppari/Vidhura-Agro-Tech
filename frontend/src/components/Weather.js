import React, { useEffect, useState } from "react";

function Weather(){

const [weather,setWeather] = useState(null);

useEffect(()=>{

fetch("https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=a503d014d14babe6648b48d5df40dc01&units=metric")
.then(res=>res.json())
.then(data=>setWeather(data));

},[]);

return(

<div style={{background:"#1e293b",padding:"20px",borderRadius:"10px"}}>

<h3>🌦 Weather</h3>

{weather ? (

<p>
Temperature: {weather.main.temp}°C <br/>
Weather: {weather.weather[0].description}
</p>

):(

<p>Loading weather...</p>

)}

</div>

)

}

export default Weather;