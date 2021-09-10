import React, {useState} from 'react';
import MapPageUI from './MapPage.presenter';

export default function MapPage() {
  const [location, setLocation] = useState({
    latitude: 37.498095,
    longitude: 127.02761,
  });
  return <MapPageUI location={location} />;
}
