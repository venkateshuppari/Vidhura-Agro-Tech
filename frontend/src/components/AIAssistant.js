import React, { useState } from "react";

function AIAssistant(){

const [question,setQuestion] = useState("");
const [answer,setAnswer] = useState("");

function askAI(){

let q = question.toLowerCase();

if(q.includes("fertilizer"))
setAnswer("Use nitrogen rich fertilizer and organic compost.");

else if(q.includes("water"))
setAnswer("Irrigate crops early morning to reduce evaporation.");

else if(q.includes("disease"))
setAnswer("Use neem oil spray or consult agriculture expert.");

else
setAnswer("Please consult a local agriculture officer.");

}

return(

<div style={{marginTop:"30px"}}>

<h3>🤖 AI Farming Assistant</h3>

<input
type="text"
placeholder="Ask farming question..."
value={question}
onChange={(e)=>setQuestion(e.target.value)}
style={{padding:"10px",width:"60%"}}
/>

<button
onClick={askAI}
style={{padding:"10px",marginLeft:"10px"}}
>
Ask
</button>

<p style={{marginTop:"15px"}}>
{answer}
</p>

</div>

)

}

export default AIAssistant;