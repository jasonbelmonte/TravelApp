import React, { useState } from 'react';
import { getDate } from '../libraries/getdate';
import CalenderUI from './Calender.presenter';

// import MapView from 'react-native-maps';
export default function Calender(props:any) {
  const  [selectedStartDate, setSelectedStartDate ]= useState('')
  const  [selectedEndDate, setSelectedEndDate ]= useState('')
  const minDate = new Date()// Today
  const maxDate = new Date(2022, 6, 3);
  const startDate  =  selectedStartDate ? getDate(selectedStartDate): '';
  const endDate = selectedEndDate ? getDate(selectedEndDate): '';

function onDateChange(date,type) {

  if (type === 'END_DATE') {
        setSelectedEndDate(date) 
  }else{
    setSelectedStartDate(date)
    setSelectedEndDate("")
  }
 

  
 
}
console.log(props.claenderDate)
  console.log("start",startDate)
  console.log("end",endDate)



console.log(props.claenderDate)

 

  return <CalenderUI 
  show={props.show}
  setShow={props.setShow}
  onDateChange={onDateChange}
  minDate={minDate}
  maxDate={maxDate}
  endDate={endDate}
  startDate={startDate}
  setClaenderDate={props.setClaenderDate}
  />;
}
