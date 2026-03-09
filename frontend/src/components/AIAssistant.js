import React, { useState } from "react";

function AIAssistant() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = () => {

    const responses = {
      "rice": "Rice grows best in flooded fields with warm temperatures.",
      "tomato": "Tomato plants need sunlight and regular watering.",
      "fertilizer": "Use organic compost or NPK fertilizer for better yield.",
      "pesticide": "Neem oil spray is a natural pesticide."
    };

    let reply = "I am your farming assistant. Please ask about crops.";

    for (let key in responses) {
      if (question.toLowerCase().includes(key)) {
        reply = responses[key];
      }
    }

    setAnswer(reply);
  };

  return (
    <div>
      <h3>🤖 AI Farming Assistant</h3>

      <input
        type="text"
        placeholder="Ask about crops, fertilizer, pests..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={askAI}>Ask</button>

      {answer && (
        <p><b>AI:</b> {answer}</p>
      )}

    </div>
  );
}

export default AIAssistant;