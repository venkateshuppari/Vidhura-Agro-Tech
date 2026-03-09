import React from "react";
import CropDisease from "./components/CropDisease";
import AIAssistant from "./components/AIAssistant";
import "./Dashboard.css";

import FarmerProfile from "./components/FarmerProfile";
import Weather from "./components/Weather";
import CropPrices from "./components/CropPrices";
import SatelliteMap from "./components/SatelliteMap";
import AIAssistant from "./components/AIAssistant";

function App() {

return(

<div className="dashboard">

<div className="sidebar">

<h2>🌱 Vidhura</h2>

<a href="#">Dashboard</a>
<a href="#">Weather</a>
<a href="#">Crop Prices</a>
<a href="#">Satellite Map</a>
<a href="#">AI Assistant</a>

</div>

<div className="main">

<h1>Smart Farming Dashboard</h1>

<div className="cards">

<div className="card">
<FarmerProfile/>
</div>

<div className="card">
<Weather/>
</div>

<div className="card">
<CropPrices/>
</div>

</div>

<SatelliteMap/>

<AIAssistant/>

<CropDisease/>

</div>

</div>

)

}

export default App;