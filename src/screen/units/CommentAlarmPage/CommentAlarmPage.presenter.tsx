import {
  Wrapper,
  Top,
  Back,
  TopTitle,
  Bar,
  Notice,
  NoticeImage,
  Contents,
  UserComment,
  Preview,
  Delete,
  Bar2
} from './CommentAlarmPage.styles';
import React from 'react';
// import MapView from 'react-native-maps';

export default function CommentAlarmPageUI() {
  return (
    <>
      <Wrapper>
        <Top>
          <Back source={require('../../../Assets/Images/GoToBack_B.png')}></Back>
          <TopTitle>댓글 소식</TopTitle>
        </Top>

        <Bar></Bar>

        <Notice>
          <NoticeImage source={require('../../../Assets/Images/IconComment_G.png')}></NoticeImage>
          <Contents>
            <UserComment>찐빵이님이 &lt; 여행 동행 구합니다. &gt; 글에 댓글을 남겼습니다. </UserComment>
            <Preview>내일 저녁에 바르셀로나에 도착해서 모레 저녁에 몬세라트에 가려고 해요. 메시지 드릴게요.</Preview>
          </Contents>
          <Delete source={require('../../../Assets/Images/IconClose_B.png')}></Delete>
        </Notice>
        <Bar2></Bar2>
      </Wrapper>
    </>
  );
}