
import React, { useContext, useRef, useState } from 'react';
import { Alert } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { ReactNativeFile } from 'apollo-upload-client';
import Uploads01UI from "./Uploads01.presenter";
import { IUploads01Props } from "./Uploads01.types";

export default function Uploads01(props: IUploads01Props) {
  const [images,setImages]=useState("")
  const fileRef = useRef<HTMLInputElement>(null);

  function onClickUpload() {
    fileRef;
  }

  // console.log("주소",onLocationSelect)
  const openCamara=()=>{
    const options ={
      storageOptions:{
        mediaType:"photo",
        maxWidth:1024,
        maxHeight:1024,

      },
      includeBase64:true,
    }
    launchImageLibrary(options,response=> {
        console.log("5",response.assets)
        if (response.didCancel){
          console.log("cancle")
          return false
        }
        else if (response.errorMessage) {
          console.log(response.errorMessage)
          return false;
        }
        
        const source = {uri:'data:image/jpeg;base64,'+response.assets?.[0].base64};
        const file = new ReactNativeFile({
          uri: response.assets?.[0].uri,
          type: response.assets?.[0].type, // 'image/jpeg',
          name: response.assets?.[0].fileName,
        });
        setImages(source)
        props.onChangeFiles(file, props.index);
        console.log("6",images)
    })
 
  }
  

  return (
    <Uploads01UI
      fileRef={fileRef}
      openCamara={openCamara}
      images={images}
      onClickUpload={onClickUpload}
    />
  );
}
