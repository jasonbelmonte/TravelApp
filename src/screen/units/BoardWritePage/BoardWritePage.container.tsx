import React, { useContext, useRef, useState } from 'react';
import { getDate } from '../../commons/libraries/getdate';
import BoardWritePageUI from './BoardWritePage.presenter';
// import MapView from 'react-native-maps';
export default function BoardWritePage() {
  const [claenderDate,setClaenderDate] =useState({startDate:'',endDate:''})
  const [show, setShow] = useState(false);
  const [map ,setMap]=useState(false)
  const [country, setCountry] = useState('Unknown');
  
  return <BoardWritePageUI 
  show={show}
  setShow={setShow}
  map={map}
  setMap={setMap}
  claenderDate={claenderDate}
  setClaenderDate={setClaenderDate}
  country={country}
  setCountry={setCountry}

  />;
}
