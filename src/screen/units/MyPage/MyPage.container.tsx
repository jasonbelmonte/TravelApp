
import React, {useState, useContext} from 'react';
import MyPageUI from './MyPage.presenter';
import { useMutation, useQuery } from '@apollo/client';
import { GlobalContext } from '../../../../App';
import { FETCH_USER_LOGGED_IN,FETCH_BOARDS_I_WROTE, SCRAP_BOARD } from './MyPage.queries';
// import MapView from 'react-native-maps';


export default function MyPage({navigation}) {

  const [isEdit, setIsEdit] = useState(false);
  const {accessToken, setAccessToken } = useContext(GlobalContext);
  const {data} = useQuery(FETCH_BOARDS_I_WROTE)
  const {data: user} = useQuery(FETCH_USER_LOGGED_IN)
  const [scrapboard] = useMutation(SCRAP_BOARD)
  const gotoCommentAlarmPage = () => {
    navigation.navigate('CommentAlarmpage');
  }
  const editOn = () => {
    setIsEdit(true)
  }
  const editOff = () => {
    setIsEdit(false)
  }
  const logOut = () => {
    setAccessToken("")
  }
  const Scrapping = (id) => async() => {
    const result = await scrapboard({
      variables : {boardId : id }
    })
    console.log(result)
  }

  return <MyPageUI 
  gotoCommentAlarmPage={gotoCommentAlarmPage} 
  isEdit = {isEdit} 
  editOn={editOn} 
  editOff={editOff} 
  data = {data}
  user = {user}
  Scrapping= {Scrapping}
  logOut = {logOut}
  />;
}

