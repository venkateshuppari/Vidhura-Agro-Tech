import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function SatelliteMap() {

  return (

    <div style={{marginTop:"20px"}}>

      <h3>🛰 Farm Location Map</h3>

      <MapContainer
        center={[17.385,78.486]}
        zoom={6}
        style={{height:"400px", width:"100%"}}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[17.385,78.486]}>
          <Popup>Farm Location</Popup>
        </Marker>

      </MapContainer>

    </div>

  );

}

export default SatelliteMap;