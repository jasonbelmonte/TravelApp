import {Container, Head, ClickText, CountryImage, Button, Colum, Body, List, ProfileImg, ProfileInit,
ProfileHead, ProfileBody, Line, ProfileInfo, Name, Country, Title, JobTitle, WriteBtn
} from './MainPage.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Animated,
  FlatList,
  ListViewComponent,
  ScrollView,
  
} from 'react-native';
import React from 'react';

// import MapView from 'react-native-maps';

export default function MainPageUI(props) {
  return (
    <>
      <Container>
        <Animated.View
          style={{
            transform: [{translateY: props.translateY}],
            zIndex: 1000,
            elevation: 1000,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
          }}>
          <Head>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <Button>
                <CountryImage
                  source={require('../../../Assets/Images/MainAfreecaImg.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>Europe</ClickText>
                </CountryImage>
              </Button>
              <Button>
                <CountryImage
                  source={require('../../../Assets/Images/MainAfreecaImg.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>Asia</ClickText>
                </CountryImage>
              </Button>
              <Button>
                <CountryImage
                  source={require('../../../Assets/Images/MainAfreecaImg.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>North America</ClickText>
                </CountryImage>
              </Button>
              <Button>
                <CountryImage
                  source={require('../../../Assets/Images/MainAfreecaImg.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>Africa</ClickText>
                </CountryImage>
              </Button>
            </ScrollView>
            <Colum
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                fontWeight: '700',
              }}>
              동행 찾기
            </Colum>
          </Head>
        </Animated.View>
        <Body>
          <Animated.FlatList
            style={{paddingTop: 220}}
            bounces={false}
            scrollEventThrottle={16}
            data={props.DATA}
            keyExtractor={item => item.key}
            onScroll={e => {
              props.scrollY.setValue(e.nativeEvent.contentOffset.y);
            }}
            renderItem={({item, index}) => {
              return (
                <List>
                  <ProfileInit>
                    <ProfileHead>
                      <JobTitle>{item.jobTitle}</JobTitle>
                      <Icon name={'bookmark'} color={'#d8d8d8'} size={20} />
                    </ProfileHead>
                    <ProfileBody>
                      <Icon name={'location'} size={9} />
                      <Country>{item.country}</Country>
                    </ProfileBody>
                  </ProfileInit>
                  <Line />
                  <Title>{item.title}</Title>
                  <ProfileInfo>
                    <ProfileImg source={{uri: item.image}} />
                    <Name>{item.name}</Name>
                  </ProfileInfo>
                </List>
              );
            }}></Animated.FlatList>
        </Body>
        <WriteBtn onPress={props.goToWrite}>
          <CountryImage
            source={require('../../../Assets/Images/MainAfreecaImg.png')}
            resizeMode="cover"
            // imageStyle={{borderRadius: 10}}
          ></CountryImage>
        </WriteBtn>
      </Container>
    </>
  );
}