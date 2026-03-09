import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { crop: "Rice", price: 2100 },
  { crop: "Wheat", price: 1800 },
  { crop: "Tomato", price: 1200 },
  { crop: "Onion", price: 1500 },
  { crop: "Potato", price: 900 }
];

function CropPrices() {
  return (
    <div>
      <h3>📊 Crop Market Prices</h3>

      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="crop" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="price" fill="#82ca9d" />
      </BarChart>
      
    </div>
  );
}

export default CropPrices;