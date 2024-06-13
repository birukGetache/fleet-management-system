import React, { useState, useEffect } from 'react';

const GpsTracker = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null, accuracy: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const handleSuccess = (position) => {
      const { latitude, longitude, accuracy } = position.coords;
      setLocation({ latitude, longitude, accuracy });
    };

    const handleError = (error) => {
      setError(error.message);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    const watchId = navigator.geolocation.watchPosition(handleSuccess, handleError, options);

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {location.latitude && location.longitude ? (
        <div>
          <h2>Current Position:</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Accuracy: {location.accuracy} meters</p>
        </div>
      ) : (
        <p>Getting location...</p>
      )}
    </div>
  );
};

export default GpsTracker;