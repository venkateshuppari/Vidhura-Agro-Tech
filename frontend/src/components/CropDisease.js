import React, { useState } from "react";

function CropDisease(){

const [result,setResult] = useState("");

function detectDisease(){

const diseases = [
"Healthy Crop",
"Leaf Blight",
"Powdery Mildew",
"Rust Disease"
];

let prediction =
diseases[Math.floor(Math.random()*diseases.length)];

setResult(prediction);

}

return(

<div style={{marginTop:"30px"}}>

<h3>🌾 Crop Disease Detection</h3>

<input type="file"/>

<button
onClick={detectDisease}
style={{marginLeft:"10px",padding:"8px"}}
>
Analyze Crop
</button>

<p style={{marginTop:"10px"}}>
Prediction: {result}
</p>

</div>

)

}

export default CropDisease;