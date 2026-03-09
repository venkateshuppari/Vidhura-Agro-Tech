import React, { useEffect, useState } from "react";

function CropPrices() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000016f0f6c3c9f6c45c5b0c7c4d2f3c0d8a5&format=json")
      .then((res) => res.json())
      .then((data) => {
        setPrices(data.records.slice(0,5));
      });
  }, []);

  return (
    <div>
      <h3>📊 Crop Market Prices</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Market</th>
            <th>Price (₹)</th>
          </tr>
        </thead>

        <tbody>
          {prices.map((item, index) => (
            <tr key={index}>
              <td>{item.commodity}</td>
              <td>{item.market}</td>
              <td>{item.modal_price}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default CropPrices;