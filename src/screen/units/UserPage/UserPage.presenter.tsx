import {Wrapper, Head,HeadLeft,HeadMiddle,HeadRight,HeadText,HeadTextBold, Body,UserImg,BodyLocation,  BodyContents,
  BodyUserText,EditIcon, BodyCountryText, BodyCityText, BodyDateText,BodyContentsText, BoardHead,BoardHeadText, BoardBody,
  BoardHeadLine,LogOutBtn, LogOutText, Button} from './UserPage.styles';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import MapView from 'react-native-maps';
import {
 Animated,
 ScrollView,
 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BoardCard from '../../commons/BoardCardUserPage/BoardCard.contatiner';

export default function UserPageUI(props) {
  return (
    <>
    
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <Wrapper>

        <Head>
          <HeadLeft>
          <Icon name={'chevron-back'} size={18} onPress={props.gotoCommentAlarmPage} />
          </HeadLeft>
          <HeadMiddle>
          <HeadTextBold>{props.data?.fetchBoardsUserWrote[0]?.writer?.name}</HeadTextBold>
          <HeadText>의정보</HeadText>
          
          </HeadMiddle>
          <HeadRight>
            
        
        
        
          </HeadRight>
        
        

        
        

          </Head>
          {!props.isEdit && (
            <Body>
            <UserImg source={require('../../../Assets/Images/MainAfreecaImg.png')} />
              <BodyUserText>{props.data?.fetchBoardsUserWrote[0]?.writer?.name}</BodyUserText>
              
              <BodyLocation>
              <Icon name={'location'} size={15} />
              <BodyCountryText>{props.data?.fetchBoardsUserWrote[0]?.writer?.location?.country}, </BodyCountryText>
              <BodyCityText>{props.data?.fetchBoardsUserWrote[0]?.writer?.location?.city}</BodyCityText>
              </BodyLocation>
              {/* <BodyDateText>2021.09.30~2036.09.30</BodyDateText> */}
              <BodyContents>
                <BodyContentsText>{props.data?.fetchBoardsUserWrote[0]?.writer?.contents}</BodyContentsText>
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
        <Icon name={'pencil-sharp'} size={18} onPress={props.ShowBoards}/>
          <BoardHeadText>  내가 쓴 글</BoardHeadText>
          
        </BoardHead>
        <BoardHeadLine></BoardHeadLine>
        
         
          {props.isShow && (<BoardCard />)}
            <LogOutBtn onPress={props.logOut}><LogOutText>로그아웃</LogOutText></LogOutBtn>
                
      

        </Wrapper>
      </ScrollView>
    </>
  );
}
