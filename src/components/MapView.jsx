import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ trips }) => {
  return (
    <MapContainer center={[40.7128, -74.006]} zoom={12} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {trips.map((trip) => (
        <React.Fragment key={trip.id}>
          <Polyline positions={[trip.pickup, trip.dropoff]} color="blue" />
          <Marker position={trip.pickup}>
            <Popup>Pickup: {trip.fare} USD</Popup>
          </Marker>
          <Marker position={trip.dropoff}>
            <Popup>Dropoff</Popup>
          </Marker>
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default MapView;
