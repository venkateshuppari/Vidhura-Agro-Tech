import React, { useState } from "react";

function FarmerProfile(){

const [name,setName] = useState("");

function saveFarmer(){

localStorage.setItem("farmer",name);

alert("Farmer profile saved");

}

return(

<div style={{marginTop:"30px"}}>

<h3>👨‍🌾 Farmer Profile</h3>

<input
type="text"
placeholder="Enter farmer name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={{padding:"10px"}}
/>

<button
onClick={saveFarmer}
style={{marginLeft:"10px"}}
>
Save
</button>

</div>

)

}

export default FarmerProfile;