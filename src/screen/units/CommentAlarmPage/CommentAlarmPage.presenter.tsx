import {
  Wrapper,
  Top,
  Button,
  Back,
  TopTitle,
  Bar,
  Notice,
  NoticeImage,
  Contents,
  UserComment,
  UserName,
  UserTitle,
  Preview,
  CommentDate,
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
          <Button>
            <Back source={require('../../../Assets/Images/GoToBack_B.png')}></Back>
          </Button>
          <TopTitle>댓글 소식</TopTitle>
        </Top>

        <Bar></Bar>

        <Notice>
          <NoticeImage source={require('../../../Assets/Images/IconComment_G.png')}></NoticeImage>
          <Contents>
            <UserComment>
              <UserName>찐빵이</UserName>님이 <UserTitle>여행 동행 구합니다.</UserTitle> 글에 댓글을 남겼습니다. 
            </UserComment>
            <Preview>내일 저녁에 바르셀로나에 도착해서 모레 저녁에 몬세라싮...</Preview>
            <CommentDate>2021. 09. 13</CommentDate>
          </Contents>
          <Delete source={require('../../../Assets/Images/IconClose_G.png')}></Delete>
        </Notice>
        <Bar2></Bar2>
      </Wrapper>
    </>
  );
}