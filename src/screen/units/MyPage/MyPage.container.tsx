
import React, {useState, useContext, useRef} from 'react';
import MyPageUI from './MyPage.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { GlobalContext } from '../../../../App';
import {useForm} from 'react-hook-form'
import { FETCH_USER_LOGGED_IN,FETCH_BOARDS_I_WROTE,UPLOAD_FILE, UPDATE_USER } from './MyPage.queries';
// import MapView from 'react-native-maps';


export default function MyPage({navigation}) {

  const [isEdit, setIsEdit] = useState(false);
  const [isShow , setIsShow] = useState(false);

  const fileRef1 = useRef<HTMLInputElement>(null);
  const [imageUrl1, setImageUrl1] = useState("");
  const [file1, setFile1] = useState();

  const {accessToken, setAccessToken } = useContext(GlobalContext);
  const {data} = useQuery(FETCH_BOARDS_I_WROTE)
  const {data: user, refetch} = useQuery(FETCH_USER_LOGGED_IN)
  const [uploadfile] = useMutation(UPLOAD_FILE)
  const [updateuser] = useMutation(UPDATE_USER)
  const { control, handleSubmit, formState: { errors } } = useForm();
  const aaa = '../../../Assets/Images/MainAfreecaImg.png'
  

  const gotoCommentAlarmPage = () => {
    navigation.navigate('CommentAlarmpage');
  }
  const editOn = () => {
    setIsEdit(true)
  }
  const editOff = async (data) => {
    console.log(data)
    try{
      // const resultFiles = await uploadfile({variables: {bbb : file1}})
      // const picture = resultFiles.data.uploadFile.url;
      await updateuser({
        variables : {
          updateUserInput : {
            contents : data.Contents,
            // picture : picture,
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
  
  // async function onChangeFile1(event) {
  //   const file = event.target.files?.[0];
  //   if (!file?.size) {
  //     console.log("파일이 없다고");
  //     return;
  //   }
  //   if (file?.size > 5 * 1024 * 1024) {
  //     console.log("파일 사이즈가 너무크니까 올리지마(제한 5MB)");
  //     return;
  //   }

  //   if (!file.type.includes("png") && !file.type.includes("jpeg")) {
  //     console.log("png또는 jpeg만 전송가능");
  //     return;
  //   }

  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(file);
  //   fileReader.onload = (data) => {
  //     // setImageUrl1(data.target?.result);
  //     setFile1(file);
  //   };
  // }

  // function onClickGreyBox1() {
  //   // fileRef1.current?.click();
  // }



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
  
  // fileRef1 = {fileRef1}
  // onChangeFile1 = {onChangeFile1}
  // imageUrl1 = {imageUrl1}
  // onClickGreyBox1 = {onClickGreyBox1}


  />;
}

