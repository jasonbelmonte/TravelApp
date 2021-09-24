
import React, {useState, useContext, useRef} from 'react';
import MyPageUI from './MyPage.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { GlobalContext } from '../../../../App';
import {useForm} from 'react-hook-form'
import { launchImageLibrary } from 'react-native-image-picker';
import {ReactNativeFile} from 'apollo-upload-client'
import { FETCH_USER_LOGGED_IN,FETCH_BOARDS_I_WROTE,UPLOAD_FILE, UPDATE_USER } from './MyPage.queries';
// import MapView from 'react-native-maps';



export default function MyPage({navigation}) {
  const {data: user, refetch} = useQuery(FETCH_USER_LOGGED_IN)
  const [isEdit, setIsEdit] = useState(false);
  const [isShow , setIsShow] = useState(false);
  const [imageUriGallary, setimageUriGallary] = useState(user?.fetchUserLoggedIn?.picture);
  const [realFile, setRealFile] = useState([]);
  
  

  const {accessToken, setAccessToken } = useContext(GlobalContext);
  const {data} = useQuery(FETCH_BOARDS_I_WROTE)
  
  const [uploadfile] = useMutation(UPLOAD_FILE)
  const [updateuser] = useMutation(UPDATE_USER)
  const { control, handleSubmit, formState: { errors } } = useForm();
  const aaa = '../../../Assets/Images/MainAfreecaImg.png'
  

  const gotoCommentAlarmPage = () => {
    navigation.navigate('CommentAlarmPage');
  }
  
  const openGallery = () => {
    const options ={
      storageOptions:{
        mediaType:"photo"
      },
      includeBase64:true,
    }
    console.log("dlsfjsdj")

    launchImageLibrary(options,response=> {
      console.log("5",response.assets)
      const source = {uri:'data:image/jpeg;base64,'+response.assets?.[0].base64};
      // const newImageUri =  response.assets?.[0].uri
      const file = new ReactNativeFile({
        uri: response.assets?.[0].uri,
        type: response.assets?.[0].type, // ‘image/jpeg’,
        name: response.assets?.[0].fileName,
      });
      setimageUriGallary(source)
      setRealFile(file)
      console.log("6",file.uri)
  })
}
    
  const editOn = () => {
    setIsEdit(true)
  }
  const editOff = async (data) => {
    console.log("444",realFile)
    try{
     
      const uploadresult = await uploadfile({ variables:{bbb: realFile}})
      const picture = uploadresult.data.uploadFile.url
      await updateuser({
        variables : {
          updateUserInput : {
            contents : data.Contents,
            picture : picture,
            location : {
              area : "유럽",
              country: data.Country,
              city : data.City,
              
            }
          }
        },
        refetchQueries: [
          {query : FETCH_USER_LOGGED_IN}
        ],
      })
      
    }catch(error){
      console.log(error.message)
    }
    
    setIsEdit(false)
  }
  const logOut = () => {
    setAccessToken("")
  }
  const ShowBoards = () => {
    isShow ? setIsShow(false) : setIsShow(true)
  }
  
  


  return <MyPageUI 
  gotoCommentAlarmPage={gotoCommentAlarmPage} 
  isEdit = {isEdit} 
  editOn={editOn} 
  editOff={editOff} 
  data = {data}
  user = {user}
  
  logOut = {logOut}
  ShowBoards = {ShowBoards}
  isShow = {isShow}
  control = {control}
  errors = {errors}
  handleSubmit = {handleSubmit}
  openGallery = {openGallery}
  imageUriGallary = {imageUriGallary}
  navigation = {navigation}

  />;
}

