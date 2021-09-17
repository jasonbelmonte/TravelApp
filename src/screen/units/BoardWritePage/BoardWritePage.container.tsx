import { useMutation } from '@apollo/client';
import React, { useContext, useRef, useState } from 'react';
import BoardWritePageUI from './BoardWritePage.presenter';
import { CREATE_BOARD, UPLOAD_FILE } from './BoardWritePage.queries';
import { useForm, Controller } from "react-hook-form";
import { Alert } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { ReactNativeFile } from 'apollo-upload-client';

// import ImagePicker from 'react-native-image-crop-picker';
// type FormData = {
//   title: string;
//   startDate:string;
//   endDate:string;
//   location:{
//     area:string;
//     country:string;
//     city:string
//   };
//   contents: string;

// };
export default function BoardWritePage({navigation }) {
  const [show, setShow] = useState(false);
  const { control, handleSubmit} = useForm()
  const [claenderDate,setClaenderDate] =useState({startDate:'',endDate:''})
  const [onLocationSelect,setOnLocationSelect] =useState({city:"",country:"", lat:"",lng:""})
  const [map ,setMap]=useState(false)
  const [country, setCountry] = useState('Unknown');
  const [createBoard]=useMutation(CREATE_BOARD)
  
  const [imagFile,setImagFile]=useState<(File | null)[]>([null, null, null]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onPressRegist = async(data)=>{
  
    try { 
  const result = imagFile
  .filter((data) => data)
  .map((data) =>   uploadFile({ variables: { file: data } }))
  const results = await Promise.all(result);
  const imgUrl =  results.map((data) => data.data.uploadFile.url)
  console.log("ss",imgUrl)
      await createBoard({
      variables:{
        createBoardInput:{
      images:imgUrl,
      title:data.title,
      contents:data.contents,
     startDate:claenderDate.startDate,
     endDate:claenderDate.endDate,
     location:{
       city:onLocationSelect.city,
       country:onLocationSelect.country
       
     },
     
    
        }
      }
    })
    Alert.alert(
      "게시물 등록 완료",
      "My Alert Msg",
      [
        {
          text: "확인",
          onPress: () => Alert.alert("Cancel Pressed"),
     
        },
      ],
    );
      // console.log(data)
      console.log("imgUrl",imgUrl)
    
      navigation.push('Home')
    } catch (error) {
      console.log(error.message)
    
    }
  }


  function onChangeFiles(file: File, index: number) {
    // 이미지 겹치기? 로 사진 삭제 하는법
    const newFiles = [...imagFile];
    newFiles[index] = file;
    setImagFile(newFiles);
  }
  

  return <BoardWritePageUI 
  show={show}
  setShow={setShow}
  map={map}
  setMap={setMap}
  claenderDate={claenderDate}
  setClaenderDate={setClaenderDate}
  country={country}
  setCountry={setCountry}
  setOnLocationSelect={setOnLocationSelect}
  onLocationSelect={onLocationSelect}
  onPressRegist={onPressRegist}
  handleSubmit={handleSubmit}
  control={control}
  navigation={navigation}
  onChangeFiles={onChangeFiles}
  
 
 

  />;
}
