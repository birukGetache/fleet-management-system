import React, { useState, useEffect } from 'react';
import Map from './Map';

const Location = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null);
        },
        (error) => {
          setError(error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );

      // Clean up the watcher when the component is unmounted
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []); // Empty dependency array ensures this effect runs once on mount and cleanup on unmount

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Track GPS Location</h1>
      {location.latitude && location.longitude ? (
        <>
          <div>
            <h3>Latitude: {location.latitude}</h3>
            <h3>Longitude: {location.longitude}</h3>
          </div>
          <Map latitude={location.latitude} longitude={location.longitude} />
        </>
      ) : (
        <p>Getting location...</p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Location;
