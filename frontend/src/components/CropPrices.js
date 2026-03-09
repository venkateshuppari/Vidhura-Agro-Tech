import React, { useEffect, useState } from "react";

function CropPrices(){

const [crops,setCrops] = useState([]);

useEffect(()=>{

fetch("https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=demo")
.then(res=>res.json())
.then(data=>{

if(data.records){
setCrops(data.records.slice(0,5));
}

});

},[]);

return(

<div style={{background:"#1e293b",padding:"20px",borderRadius:"10px",marginTop:"20px"}}>

<h3>📊 Crop Market Prices</h3>

<table border="1" style={{width:"100%",color:"white"}}>

<thead>
<tr>
<th>Crop</th>
<th>Market</th>
<th>Price</th>
</tr>
</thead>

<tbody>

{crops.map((crop,index)=>(

<tr key={index}>
<td>{crop.commodity}</td>
<td>{crop.market}</td>
<td>₹{crop.modal_price}</td>
</tr>

))}

</tbody>

</table>

</div>

)

}

export default CropPrices;