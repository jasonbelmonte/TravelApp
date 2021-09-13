import React, {useState} from 'react';
import MapPageUI from './MapPage.presenter';

export default function MapPage() {
  const [location, setLocation] = useState({
    latitude: 41.3879,
    longitude: 2.16992 ,
  });
  return <MapPageUI location={location} />;
}
