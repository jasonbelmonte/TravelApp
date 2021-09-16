

import {Wrapper, Head,HeadLeft,HeadMiddle,HeadRight,HeadText, Body,UserImg,BodyLocation,  BodyContents,
   BodyUserText,EditIcon,BodyCountry, BodyCity, BodyCountryText, BodyCityText, BodyDateText,BodyContentsText,
   BodyCityTextInput,BodyCountryTextInput,BodyContentsTextInput, BoardHead,BoardHeadText, BoardBody,
   BoardHeadLine,LogOutBtn, LogOutText, Button} from './MyPage.styles';
import React from 'react';
import {TextInput,Text } from "react-native"
import {useForm, Controller} from 'react-hook-form'
import Icon from 'react-native-vector-icons/Ionicons';
// import MapView from 'react-native-maps';
import {
  Animated,
  ScrollView,
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BoardCard from '../../commons/BoardCardMyPage/BoardCard.contatiner';


export default function MyPageUI(props) {
  const uriedit = `https://storage.googleapis.com/${props.user?.fetchUserLoggedIn?.picture}`
  console.log(uriedit)
  return (
    <>
    
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <Wrapper>

        <Head>
          <HeadLeft>
          <Icon name={'chevron-back'} size={18} onPress={props.gotoCommentAlarmPage} />
          </HeadLeft>
          <HeadMiddle>
          <HeadText>마이페이지</HeadText>
          {!props.isEdit && (
              // <Icon name={'pencil-sharp'} size={18} onPress={props.editOn} />
              <Button onPress={props.editOn} >
                  <EditIcon
                  source={require('../../../Assets/Images/IconEdit.png')}
                />
              </Button>
              

            )}
            {props.isEdit && (
              <HeadText style={{color:'#FFBE2B'}}  onPress={props.handleSubmit(props.editOff)} >완료</HeadText>
              
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
            <UserImg source={{uri : uriedit}}
              
            />
              <BodyUserText>{props.user?.fetchUserLoggedIn?.name}</BodyUserText>
              
              
              <BodyLocation>
              <Icon name={'location'} size={15} />
              <BodyCountry>
              <BodyCountryText>{props.user?.fetchUserLoggedIn?.location?.country}, </BodyCountryText>
              </BodyCountry>
              <BodyCity>
              <BodyCityText>{props.user?.fetchUserLoggedIn?.location?.city}</BodyCityText>
              </BodyCity>
              </BodyLocation>
              {/* <BodyDateText>2021.09.30~2036.09.30</BodyDateText> */}
              <BodyContents>
                <BodyContentsText>{props.user?.fetchUserLoggedIn?.contents}</BodyContentsText>
              </BodyContents>
            </Body>
          )}
          


          {props.isEdit && (
              <Body>
                
                {props.imageUrl1 ? (
                  <Button onPress={props.onClickGreyBox1}>
                    <UserImg source={{uri : props.imageUrl1}} />
                  </Button>
            
          ) : (
            <Button onPress={props.onClickGreyBox1}>
                <UserImg source={{uri : uriedit}} />
            </Button>
          )}
          <Button
            ref={props.fileRef1}
            
            onPress={props.onChangeFile1}
            style={{ display: "none" }}
          />

              {/* <UserImg source={require('../../../Assets/Images/MainEuropeImg.png')} /> */}
                <BodyUserText style={{color:'#FF5F2E'}}>{props.user?.fetchUserLoggedIn?.name}</BodyUserText>
                
                <BodyLocation>
                <Icon name={'location'} size={15} style={{color:'#C8C8C8'}}/>
                <BodyCountry>
                <Controller
                    control={props.control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <BodyCountryTextInput
                  
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="Country"
                    defaultValue={props.user?.fetchUserLoggedIn?.location?.country} 
                  />
                  {props.errors.Country && <Text>This is required.</Text>}
                </BodyCountry>
                
                <BodyCity>
                <Controller
                    control={props.control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <BodyCityTextInput
                  
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="City"
                    defaultValue={props.user?.fetchUserLoggedIn?.location?.city} 
                  />
                  {props.errors.City && <Text>This is required 2.</Text>}
                </BodyCity>
                
                </BodyLocation>
                
                <BodyContents>
                <Controller
                    control={props.control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <BodyCityTextInput
                  
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="Contents"
                    defaultValue={props.user?.fetchUserLoggedIn?.contents} 
                  />
                  {props.errors.City && <Text>This is required 3.</Text>}
                </BodyContents>
                {/* <Button  onPress={props.handleSubmit(props.onSubmit)} ><Text>에디트</Text></Button> */}
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
