import {
  Wrapper,
  Head,
  HeadLeft,
  HeadMiddle,
  HeadRight,
  HeadText,
  Body,
  UserView,
  UserImg,
  UserImgBackground,
  BodyLocation,
  BodyContents,
  BodyUserText,
  EditIcon,
  EditIcon2,
  BodyCountry,
  BodyCity,
  BodyCountryText,
  BodyCityText,
  BodyDateText,
  BodyContentsText,
  BodyCityTextInput,
  BodyCountryTextInput,
  BodyContentsTextInput,
  BoardHead,
  BoardHeadText,
  BoardBody,
  BoardHeadLine,
  LogOutBtn,
  LogOutText,
  Button,
} from './MyPage.styles';
import React from 'react';
import {TextInput, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
// import MapView from 'react-native-maps';
import {Animated, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BoardCard from '../../commons/BoardCardMyPage/BoardCard.contatiner';

export default function MyPageUI(props) {
  const uriedit = `https://storage.googleapis.com/${props.user?.fetchUserLoggedIn?.picture}`;
  console.log(uriedit);
  return (
    <>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <Wrapper>
          <Head>
            <HeadLeft>
              {/* <Icon
                name={'chevron-back'}
                size={18}
                onPress={props.gotoCommentAlarmPage}
              /> */}
            </HeadLeft>
            <HeadMiddle>
              <HeadText>마이페이지</HeadText>
              {!props.isEdit && (
                // <Icon name={'pencil-sharp'} size={18} onPress={props.editOn} />
                <Button onPress={props.editOn}>
                  <EditIcon
                    source={require('../../../Assets/Images/IconEdit.png')}
                  />
                </Button>
              )}
              {props.isEdit && (
                <HeadText
                  style={{color: '#FFBE2B'}}
                  onPress={props.handleSubmit(props.editOff)}>
                  완료
                </HeadText>
              )}
            </HeadMiddle>
            <HeadRight>
              {/* <Icon name={'notifications-outline'} size={18} onPress={props.gotoCommentAlarmPage} /> */}
              <Button onPress={props.gotoCommentAlarmPage}>
                <EditIcon
                  source={require('../../../Assets/Images/IconAlarm.png')}
                />
              </Button>
            </HeadRight>
          </Head>
          {!props.isEdit && (
            <Body>
              {props.user?.fetchUserLoggedIn?.picture ? (
                <UserImg source={{uri: uriedit}} />
              ) : (
                <UserImg
                  source={require('../../../Assets/Images/Noimage.png')}
                />
              )}
              <BodyUserText>{props.user?.fetchUserLoggedIn?.name}</BodyUserText>

              <BodyLocation>
                <Icon name={'location'} size={15} />
                <BodyCountry>
                  <BodyCountryText>
                    {props.user?.fetchUserLoggedIn?.location?.country ||
                      'noCountry'}
                    ,{' '}
                  </BodyCountryText>
                </BodyCountry>
                <BodyCity>
                  <BodyCityText>
                    {props.user?.fetchUserLoggedIn?.location?.city || 'noCity'}
                  </BodyCityText>
                </BodyCity>
              </BodyLocation>
              {/* <BodyDateText>2021.09.30~2036.09.30</BodyDateText> */}
              <BodyContents>
                <BodyContentsText>
                  {props.user?.fetchUserLoggedIn?.contents}
                </BodyContentsText>
              </BodyContents>
            </Body>
          )}

          {props.isEdit && (
            <Body>
              <Button onPress={props.openGallery}>
                {props.imageUriGallary ? (
                  <UserImgBackground source={props.imageUriGallary} />
                ) : props.user?.fetchUserLoggedIn?.picture ? (
                  <UserImg source={{uri: uriedit}} />
                ) : (
                  <UserImg
                    source={require('../../../Assets/Images/Noimage.png')}
                  />
                )}
              </Button>

              {/* <UserImg source={require('../../../Assets/Images/MainEuropeImg.png')} /> */}
              <BodyUserText>{props.user?.fetchUserLoggedIn?.name}</BodyUserText>

              <BodyLocation>
                {/* <Icon name={'location'} size={15} style={{color:'#C8C8C8'}}/> */}
                <BodyCountry>
                  <Controller
                    control={props.control}
                    rules={{
                      required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <BodyCountryTextInput
                        style={{color: '#000'}}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={'나라필수'}
                        placeholderTextColor="#bdbdbd"
                      />
                    )}
                    name="Country"
                    defaultValue={
                      props.user?.fetchUserLoggedIn?.location?.country
                    }
                  />
                  {/* {props.errors.Country && <Text>This is required.</Text>} */}
                </BodyCountry>

                <BodyCity>
                  <Controller
                    control={props.control}
                    rules={{
                      required: true,
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <BodyCityTextInput
                        style={{color: '#000'}}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder={'도시필수'}
                      />
                    )}
                    name="City"
                    defaultValue={props.user?.fetchUserLoggedIn?.location?.city}
                  />
                  {/* {props.errors.City && <Text>This is required 2.</Text>} */}
                </BodyCity>
              </BodyLocation>

              <BodyContents>
                <Controller
                  control={props.control}
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <BodyCityTextInput
                      style={{color: '#000'}}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="내용입력해주세요"
                    />
                  )}
                  name="Contents"
                  defaultValue={props.user?.fetchUserLoggedIn?.contents}
                />
                {/* {props.errors.City && <Text>This is required 3.</Text>} */}
              </BodyContents>
              {/* <Button  onPress={props.handleSubmit(props.onSubmit)} ><Text>에디트</Text></Button> */}
            </Body>
          )}

          <BoardHead>
            {/* <Icon name={'pencil-sharp'} size={18} onPress={props.ShowBoards} /> */}
            <Button onPress={props.ShowBoards}>
              <EditIcon2
                source={require('../../../Assets/Images/IconDropDown.png')}
              />
            </Button>
            <BoardHeadText> 내가 쓴 글</BoardHeadText>
          </BoardHead>
          <BoardHeadLine></BoardHeadLine>

          {props.isShow && <BoardCard navigation={props.navigation} />}

          <LogOutBtn onPress={props.logOut}>
            <LogOutText>로그아웃</LogOutText>
          </LogOutBtn>
        </Wrapper>
      </ScrollView>
    </>
  );
}
