import {
  Wrapper,
  Button,
  BackIcon,
  Head,
  Colum,
  Colum2,
  Colum3,
  Colum3_2,
  Colum4,
  Body,
  Contents,
  Title,
  DatePick,
  ModalView,
  ButtonClose,
  Calendar,
  BodyBox,
  WorldPick,
  LocPick,
  IconImg,



 
} from './BoardWritePage.styles';
import React, { useRef, useState } from 'react';
import { Alert, Modal, StyleSheet } from 'react-native';
import Claender from '../../commons/Calender/Calender.container';
import { Picker } from "@react-native-picker/picker";
import Map01 from '../../commons/Map/Map01.container';

export default function BoardWritePageUI(props:any) {
  const styles = StyleSheet.create({
    picker: {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 17.5
      
 
     
    },
  
  });
  const DatePicked =props.claenderDate.startDate &&props.claenderDate.endDate ?props.claenderDate.startDate + '   '+"~" +'   '+ props.claenderDate.endDate: "날짜를 선택" 
  return (
    <>
      <Head>
        <Button>
        <BackIcon source={require('../../../Assets/Images/GoToBack_B.png')} />
        </Button>
       <Colum>동행찾기 글쓰기</Colum>
     
       <Button><Colum2>등록</Colum2></Button>
      </Head> 
        <Modal
        animationType="slide"
        transparent={true}
        visible={props.show}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          props.setShow(!props.show);
        }}
      >  
      <Claender  setShow={props.setShow} 
      setClaenderDate={props.setClaenderDate}
      claenderDate={props.claenderDate}
      />
              </Modal>
            <Wrapper> 
              
              <Body>
                <Title placeholder={"제목"}></Title>
                <DatePick onPress={()=>props.setShow(true)} >
                  <IconImg source={require("../../../Assets/Images/IconSchedule.png")}/>
                  <Colum3 startDate={props.claenderDate.startDate &&props.claenderDate.endDate } >{DatePicked}</Colum3>
                </DatePick>
  
          <BodyBox>
              <WorldPick  >
              <IconImg source={require("../../../Assets/Images/IconEarth.png")}/>
      <Picker
        selectedValue={props.country}
        onValueChange={(value, index) => props.setCountry(value)}
        mode="dialog" // Android only
        style={styles.picker}
       dropdownIconColor={"none"}
      > 
    <Picker.Item    style={{fontSize:12 ,color:"#A5A5A5"}}  label="대륙 선택" value="대륙 선택" />
        <Picker.Item style={{fontSize:12}}label="유럽" value="유럽" />
        <Picker.Item style={{fontSize:12 ,}}label="아시아" value="아시아" />
        <Picker.Item style={{fontSize:12}}label="북아메리카" value="북아메리카" />
        <Picker.Item style={{fontSize:12}}label="남아메리카" value="남아메리카" />
        <Picker.Item style={{fontSize:12}}label="아프리카" value="아프리카" />
        <Picker.Item style={{fontSize:12}}label="오세아니아" value="오세아니아" />
      </Picker>
      </WorldPick>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.map}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          props.setShow(!props.map);
        }}
      >  
      <Map01 setMap={props.setMap} setOnLocationSelect={props.setOnLocationSelect}/>
      </Modal>
            <LocPick onPress={()=>props.setMap(true)}>
            <IconImg source={require("../../../Assets/Images/IconLocationInBoard.png")}/>
              < Colum3_2 onLocationSelect={props.onLocationSelect}>{props.onLocationSelect }</ Colum3_2></LocPick>
            </BodyBox> 
              </Body>
              <Body>
                
                <Button>
                  <Contents></Contents>
                </Button>
               
              </Body>
              
            </Wrapper>
     

    </>
  );
}
