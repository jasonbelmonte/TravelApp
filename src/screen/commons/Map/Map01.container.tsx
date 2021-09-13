import React, {useState} from 'react';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Map01UI from './Map01.presenter';


export default function Map01(props:any) {
  const [location, setLocation] = useState({
    latitude: 41.3879,
    longitude: 2.16992 ,
  });
  return <Map01UI location={location} 
  setMap={props.setMap}/>;
}
