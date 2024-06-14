
import { MapContainer, TileLayer, Circle, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const circles = [
  { center: [9.145, 40.4897], radius: 50000, color: 'red' }, // Circle in Ethiopia
  { center: [9.0, 39.0], radius: 30000, color: 'blue' }, // Another circle in Ethiopia
  { center: [8.5, 39.5], radius: 20000, color: 'green' } // Another circle in Ethiopia
];

const carPath = [
  [9.17, 40.47],    // Move along a curved road
  [9.2, 40.45],     // Move along a curved road
  [9.1, 40.43],     // Move along a road towards the blue circle
  [8.8, 39.6],      // Move along a road
  [8.5, 39.5],      // Inside the green circle
];

const carPath2 = [
  [9.2, 40.5],   // Move along a road towards the blue circle
  [8.9, 40.2],   // Move along a road
  [8.8, 39.6],   // Move along a road
  [8.6, 39.4],
  [9.0, 39.0]   // Inside the green circle
];

const AllowPosition = () => {
  return (
    <MapContainer
      center={[8.90000000, 40.00000000]} // Center th map on Ethiopia
      zoom={7} // Adjust zoom level for better view
      style={{ height: '500px'}}
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
      {circles.map((circle, index) => (
        <Circle
          key={index}
          center={circle.center}
          radius={circle.radius}
          pathOptions={{ color: circle.color }}
        >
          <Popup>
            <span>Center: {circle.center.join(', ')}<br />Radius: {circle.radius} meters</span>
          </Popup>
        </Circle>
      ))}
      <Polyline positions={carPath} color="red" pathOptions={{ weight: 2 }} />
      <Polyline positions={carPath2} color="blue" pathOptions={{ weight: 2 }} />
    </MapContainer>
  );
};

export default AllowPosition;
