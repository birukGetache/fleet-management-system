import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const route = [
  [9.145, 40.4897],  // Start point in Ethiopia
  [9.15, 40.50],     // Intermediate point
  [9.2, 40.55],      // Another intermediate point
  [9.3, 40.6],       // End point in Ethiopia
];

const Goes = () => {
  return (
    <MapContainer
      center={[9.145, 40.4897]}
      zoom={8}
      style={{ height: '600px', width: '100%' }}
      scrollWheelZoom={false}
      dragging={false}
      doubleClickZoom={false}
      touchZoom={false}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={route} color="red" />
    </MapContainer>
  );
};

export default Goes;
