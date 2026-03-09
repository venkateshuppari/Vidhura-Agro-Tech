import React, { useState } from "react";

function CropDisease() {

  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const detectDisease = () => {
    // Demo prediction
    const diseases = [
      "Healthy Leaf",
      "Tomato Leaf Blight",
      "Potato Early Blight",
      "Leaf Spot Disease"
    ];

    const random = diseases[Math.floor(Math.random() * diseases.length)];
    setResult(random);
  };

  return (
    <div>
      <h3>🌿 Crop Disease Detection</h3>

      <input type="file" onChange={handleImage} />

      {image && (
        <div>
          <br/>
          <img src={image} alt="plant" width="200" />
          <br/><br/>

          <button onClick={detectDisease}>Detect Disease</button>

          {result && (
            <p><b>Prediction:</b> {result}</p>
          )}
        </div>
      )}

    </div>
  );
}

export default CropDisease;