import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const GoogleMaps = () => {
  const [center, setCenter] = useState(null);
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Use your .env variable

  useEffect(() => {
    if (apiKey) {
      // Use a geocoding service to convert the address into coordinates
      const geocoder = new window.google.maps.Geocoder();
      const address = '33 Hazel Street, Ext6 Marlands, Germiston, Gauteng, South Africa, 1401';

      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results && results.length > 0) {
          const location = results[0].geometry.location;
          setCenter({ lat: location.lat(), lng: location.lng() });
        }
      });
    }
  }, [apiKey]);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {center && <Marker position={center} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
