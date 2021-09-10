import React from 'react';
import MyPageUI from './MyPage.presenter';
// import MapView from 'react-native-maps';
import {
  Animated,
  
  
} from 'react-native';
export default function MyPage({navigation}) {

  const gotoCommentAlarmPage = () => {
    navigation.navigate('CommentAlarmpage');
  }
  
  return <MyPageUI gotoCommentAlarmPage={gotoCommentAlarmPage}/>;
}