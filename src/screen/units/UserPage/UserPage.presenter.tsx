import {
  Wrapper,
  Head,
  HeadLeft,
  HeadMiddle,
  HeadRight,
  HeadText,
  HeadTextBold,
  Body,
  UserImg,
  BodyLocation,
  BodyContents,
  BodyUserText,
  EditIcon,
  BodyCountryText,
  BodyCityText,
  BodyDateText,
  BodyContentsText,
  BoardHead,
  BoardHeadText,
  BoardHeadUserText,
  BoardBody,
  BoardHeadLine,
  LogOutBtn,
  LogOutText,
  Button,
} from './UserPage.styles';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import MapView from 'react-native-maps';
import {Animated, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BoardCard from '../../commons/BoardCardUserPage/BoardCard.contatiner';

export default function UserPageUI(props) {
  const uriedit = `https://storage.googleapis.com/${props.data?.fetchBoardsUserWrote[0]?.writer?.picture}`;
  return (
    <>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <Wrapper>
          <Head>
            <HeadLeft>
              <Button onPress={props.gotoBack}>
                <EditIcon
                  source={require('../../../Assets/Images/GoToBack_B.png')}
                />
              </Button>
            </HeadLeft>
            <HeadMiddle>
              <HeadTextBold>
                {props.data?.fetchBoardsUserWrote[0]?.writer?.name}
              </HeadTextBold>
              <HeadText>님 회원정보</HeadText>
            </HeadMiddle>
            <HeadRight></HeadRight>
          </Head>

          <Body>
            {props.data?.fetchBoardsUserWrote[0]?.writer?.picture ? (
              <UserImg source={{uri: uriedit}} />
            ) : (
              <UserImg source={require('../../../Assets/Images/Noimage.png')} />
            )}
            {/* <UserImg
              source={require('../../../Assets/Images/MainAfreecaImg.png')}
            /> */}
            <BodyUserText>
              {props.data?.fetchBoardsUserWrote[0]?.writer?.name}
            </BodyUserText>

            <BodyLocation>
              <Icon name={'location'} size={15} />
              <BodyCountryText>
                {props.data?.fetchBoardsUserWrote[0]?.writer?.location?.country}
                ,{' '}
              </BodyCountryText>
              <BodyCityText>
                {props.data?.fetchBoardsUserWrote[0]?.writer?.location?.city}
              </BodyCityText>
            </BodyLocation>
            {/* <BodyDateText>2021.09.30~2036.09.30</BodyDateText> */}
            <BodyContents>
              <BodyContentsText>
                {props.data?.fetchBoardsUserWrote[0]?.writer?.contents}
              </BodyContentsText>
            </BodyContents>
          </Body>

          <BoardHead>
            <Icon name={'pencil-sharp'} size={18} onPress={props.ShowBoards} />
            <BoardHeadUserText>
              {props.data?.fetchBoardsUserWrote[0]?.writer?.name}
            </BoardHeadUserText>
            <BoardHeadText> 님이 쓴 글</BoardHeadText>
          </BoardHead>
          <BoardHeadLine></BoardHeadLine>

          {props.isShow && (
            <BoardCard navigation={props.navigation} userId={props.userId} />
          )}
        </Wrapper>
      </ScrollView>
    </>
  );
}
