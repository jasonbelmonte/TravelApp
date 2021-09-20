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
  WriteBox,
  BodyBox,
  WorldPick,
  LocPick,
  IconImg,
  Line,
  ImageBox,
  ImagePicked,
  Image1,
  Error,

 
} from './BoardWritePage.styles';
import React from 'react';
import { Alert, Dimensions,Modal,  StyleSheet } from 'react-native';

import Claender from '../../commons/Calender/Calender.container';
import { Picker } from "@react-native-picker/picker";
import Map01 from '../../commons/Map/Map01.container';
import {Controller } from "react-hook-form";

import Uploads01 from '../../commons/uploads/Uploads01/Uploads01.container';
import { View } from '../MapPage/MapPage.styles';
import ModalTester from '../../commons/Modal/Modal';
export default function BoardWritePageUI(props:any) {
  const styles = StyleSheet.create({
    picker: {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 17.5
    },
  
  });
  const startPicked =props.claenderDate.startDate?props.claenderDate.startDate + "~": "날짜를" 
  const endPicked =props.claenderDate.startDate ? props.claenderDate.endDate: "선택" 
  return (
    <>
      <Head>
        <Button onPress={() =>props.navigation.goBack(null)}>
        <BackIcon source={require('../../../Assets/Images/GoToBack_B.png')} />
        </Button>
       <Colum>동행찾기 글쓰기</Colum>

       <Button onPress={props.handleSubmit(props.onPressRegist)}><Colum2>등록</Colum2></Button>
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
              <Controller
              control={props.control}
              
              render={({field:{onChange,value,onBlur}})=>(
                <Title 
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder={"제목"}
                ></Title>
              )}
              name="title"
              defaultValue=""
              />
                    {props.errors?.title?.message &&
          <Error >{props.errors.title.message}</Error>
        }
                   <Modal
                    animationType="slide"
                    transparent={true}
                    visible={props.errorModal}
                   >
                     <ModalTester
                     setErrorModal={props.setErrorModal}
                     />
                     </Modal>
           
     
              
                <DatePick onPress={()=>props.setShow(true)} >
                  <IconImg source={require("../../../Assets/Images/IconSchedule.png")}/>
                  <Controller
              control={props.control}
              render={({field:{onChange,value}})=>(
                <Colum3 
                onChangeText={onChange}
                selectedValue={value}
                startDate={props.claenderDate.startDate &&props.claenderDate.endDate }
                  >{startPicked}</Colum3>
              )}
              name="startDate"
              rules={{required:false}}
              />
              <Controller
              control={props.control}
              render={({field:{onChange,value}})=>(
                  <Colum3 
                  selectedValue={value}
                  onChangeText={onChange}
                  startDate={props.claenderDate.startDate &&props.claenderDate.endDate } 
                  >{endPicked}</Colum3>
              )}
              name="endDate"
              rules={{required:false}}
              />

                </DatePick>
  
          <BodyBox>
              <WorldPick  >
              <IconImg source={require("../../../Assets/Images/IconEarth.png")}/>
              <Controller
              control={props.control}
              render={({field:{onChange,value}})=>(
                  <Picker
                  selectedValue={value}
                 onValueChange={(value) => {
                   onChange(value);
                 }}
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
               )}
              name="area"
              rules={{required:false}}
              />  
     
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
            <Controller
              control={props.control}
              render={({field:{onChange,value}})=>(
                  < Colum3_2 
                  onChangeText={onChange}
                  value={value}
              onLocationSelect={props.onLocationSelect.city}
              >
                {props.onLocationSelect.city? props.onLocationSelect.city + "," : "위치" }</ Colum3_2>
              )}
              name="city"
              rules={{required:false}}
              />
               <Controller
              control={props.control}
              render={({field:{onChange,value}})=>(
  
                < Colum3_2 
               
                onChangeText={onChange}
                value={value}
                onLocationSelect={props.onLocationSelect.country}
                 >
                {props.onLocationSelect.country?props.onLocationSelect.country: "선택" }</ Colum3_2>
              )}
              name="country"
              rules={{required:false}}
              />
               
              </LocPick>
            </BodyBox> 
            <WriteBox>
            <Controller
              control={props.control}
              render={({field:{onChange,value}})=>(
                 <Contents 
                 onChangeText={onChange}
                 value={value}
                 multiline={true}
                placeholder="동행을 구하기 위한 글을 작성해주세요. &#13;&#10;( 제목에 위치, 일정, 기간을 자세히 적을 수록 내 글을 더 많은 동행들에게 &#13;&#10; 보여줄 수 있어요 ! )">
              </Contents>
              )}
              name="contents"
              rules={{required:false}}
              />
                                   {props.errors?.contents?.message &&
          <Error >{props.errors.contents.message}</Error>
        }
             
            </WriteBox>
            <Line/>
<ImageBox>
{new Array(3).fill(1).map((data, index) => (
                <Uploads01
                  key={`${data}_${index}`}
                  index={index}
                  onChangeFiles={props.onChangeFiles}
                />
              ))}

</ImageBox> 
              </Body>
            
            </Wrapper>
     

    </>
  );
}
