import React, { useState } from 'react';
import BoardWritePageUI from './BoardWritePage.presenter';
import DateTimePicker from '@react-native-community/datetimepicker';
// import MapView from 'react-native-maps';
export default function BoardWritePage() {
  
  const [show, setShow] = useState(false);



  const showMode = () => {
    setShow(true);
  
  };


  return <BoardWritePageUI 
  
  show={show}

  showMode={showMode}
  />;
}
