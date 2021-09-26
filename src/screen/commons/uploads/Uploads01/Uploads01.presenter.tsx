import React from 'react';
import { ImageBox,
  ImagePicked,
  Image1, 
  UlploadInPut,} from "./Uploads01.style";
import { IUploads01UIProps } from "./Uploads01.types";
import Icon from 'react-native-vector-icons/Ionicons';
export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <> 
      {props.images?(<ImagePicked onPress={()=> props.openCamara() }><Image1 source={props.images}/></ImagePicked>)
      :<ImagePicked onPress={()=> props.openCamara() } > 
     <Icon  name={"add-outline"} size={30} color="#D8D8D8"/>
    </ImagePicked >}

      <UlploadInPut
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
