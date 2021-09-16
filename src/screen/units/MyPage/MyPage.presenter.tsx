

import {Wrapper, Head,HeadLeft,HeadMiddle,HeadRight,HeadText, Body,UserImg,BodyLocation,  BodyContents,
   BodyUserText,BodyUserTextInput, BodyCountryText, BodyCityText, BodyDateText,BodyContentsText, BoardHead,BoardHeadText, BoardBody,  ProfileImg, ProfileInit,
  ProfileHead, ProfileBody, Line, ProfileInfo, Name, Country, Title, JobTitle, WriteBtn, BoardHeadLine,LogOutBtn, LogOutText} from './MyPage.styles';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import MapView from 'react-native-maps';
import {
  Animated,
  ScrollView,
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function MyPageUI(props) {
  return (
    <>
    
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <Wrapper>

        <Head>
          <HeadLeft>
          <Icon name={'chevron-back'} size={18} onPress={props.gotoCommentAlarmPage} />
          </HeadLeft>
          <HeadMiddle>
          <HeadText>마이페이지좀</HeadText>
          
          </HeadMiddle>
          <HeadRight>
            {!props.isEdit && (
              <Icon name={'pencil-sharp'} size={18} onPress={props.editOn} />

            )}
            {props.isEdit && (
              <HeadText style={{color:'#FFBE2B'}}  onPress={props.editOff} >완료</HeadText>
              
            )}
        <Icon name={'notifications-outline'} size={18} onPress={props.gotoCommentAlarmPage} />
          </HeadRight>
        
        

        
        

          </Head>
          {!props.isEdit && (
            <Body>
            <UserImg source={require('../../../Assets/Images/MainAfreecaImg.png')} />
              <BodyUserText>{props.user?.fetchUserLoggedIn?.name}</BodyUserText>
              
              <BodyLocation>
              <Icon name={'location'} size={15} />
              <BodyCountryText>England,</BodyCountryText>
              <BodyCityText>Leicester City</BodyCityText>
              </BodyLocation>
              <BodyDateText>2021.09.30~2036.09.30</BodyDateText>
              <BodyContents>
                <BodyContentsText>{props.user?.fetchUserLoggedIn?.email}</BodyContentsText>
              </BodyContents>
            </Body>
          )}
          


          {props.isEdit && (
              <Body>
              <UserImg source={require('../../../Assets/Images/MainEuropeImg.png')} />
                <BodyUserText style={{color:'#FF5F2E'}}>닉네임은입력해주셔야지요</BodyUserText>
                <BodyLocation>
                <Icon name={'location'} size={15} style={{color:'#C8C8C8'}}/>
                <BodyCountryText style={{color:'#C8C8C8'}}>England,</BodyCountryText>
                <BodyCityText style={{color:'#C8C8C8'}}>Leicester City</BodyCityText>
                </BodyLocation>
                <BodyDateText style={{color:'#C8C8C8'}}>2021.09.30~2036.09.30</BodyDateText>
                <BodyContents>
                  <BodyContentsText style={{color:'#C8C8C8'}}>15년동안 축구하실분 구합니다. 영원히 뛰게 해드릴게요 무릎이 작살이 나도 뛰게 해드립니다. ㅎㅎㅎㅎㅎㅎㅎㅎㅎ</BodyContentsText>
                </BodyContents>
              </Body>
          )}
        
        <BoardHead>
        <Icon name={'pencil-sharp'} size={18} />
          <BoardHeadText>  내가 쓴 글</BoardHeadText>
          
        </BoardHead>
        <BoardHeadLine></BoardHeadLine>
        
          {props.data?.fetchBoardsIWrote.map((data, index) => {
            return (
              <BoardBody key={index}>
              <ProfileInit>
                <ProfileHead>
                  <JobTitle>{data.title}</JobTitle>
                  <Icon name={'bookmark'} color={'#d8d8d8'} size={20} onPress={props.Scrapping(data._id)}/>
                </ProfileHead>
                <ProfileBody>
                  <Icon name={'location'} size={9} />
                  <Country>{data.location.country},{data.location.city}</Country>
                </ProfileBody>
              </ProfileInit>
              <Line />
              <Title>{data.contents}</Title>
              <ProfileInfo>
                <ProfileImg source={require('../../../Assets/Images/MainAfreecaImg.png')} />
                <Name>{data.writer.name}</Name>
              </ProfileInfo>
            </BoardBody>
            )
          })}
            <LogOutBtn onPress={props.logOut}><LogOutText>로그아웃</LogOutText></LogOutBtn>
                
      

        </Wrapper>
      </ScrollView>
    </>
  );
}
