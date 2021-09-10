import React, {useState} from 'react';
import MyPageUI from './MyPage.presenter';
// import MapView from 'react-native-maps';


export default function MyPage({navigation}) {

  const [isEdit, setIsEdit] = useState(true);
  const gotoCommentAlarmPage = () => {
    navigation.navigate('CommentAlarmpage');
  }
  
  return <MyPageUI gotoCommentAlarmPage={gotoCommentAlarmPage} isEdit = {isEdit} setIsEdit={setIsEdit}/>;
}

