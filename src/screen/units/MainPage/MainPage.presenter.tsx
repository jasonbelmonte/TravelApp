import {
  Container,
  Head,
  ClickText,
  CountryImage,
  Button,
  Colum,
  Body,
  List,
  WriteBtn,
  CardWrap,
  Card,
  CardLeft,
  CardRight,
  ScrapButton,
  CardTitle,
  CardMiddle,
  CardMiddleContents,
  LocationImg,
  CardMiddleText,
  CardWriter,
  WriterPhoto,
  WriterName,
  ImageBox,
  Button_2 ,
} from './MainPage.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {ActivityIndicator, Animated, FlatList, ListViewComponent, ScrollView} from 'react-native';
import { NetworkStatus } from '@apollo/client';

// import MapView from 'react-native-maps';

export default function MainPageUI(props: any) {
  
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
                  source={require('../../../Assets/Images/MainEuropeImg.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>Europe</ClickText>
                </CountryImage>
              </Button>
              <Button>
                <CountryImage
                  source={require('../../../Assets/Images/MainSouthAmericaImg.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>South America</ClickText>
                </CountryImage>
              </Button>
              <Button>
                <CountryImage
                  source={require('../../../Assets/Images/MainNorthAmericaImg.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>North America</ClickText>
                </CountryImage>
              </Button>
              <Button>
                <CountryImage
                  source={require('../../../Assets/Images/MainAsiaImg.png')}
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
                  <ClickText>Africa</ClickText>
                </CountryImage>
              </Button>
              <Button>
                <CountryImage
                  source={require('../../../Assets/Images/MainOceaniaImg.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>Oceania</ClickText>
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
            style={{paddingTop: 220,paddingBottom:100,}}
            bounces={false}
            scrollEventThrottle={16}
            onScroll={e => {
              props.scrollY.setValue(e.nativeEvent.contentOffset.y);
            }}
            data={props.data?.fetchBoards}
            keyExtractor={item => item._id}
            // refreshing={props.refreshing === 4}
            // onRefresh={()=>props.data.refetch()}
            onEndReachedThreshold={1}
            onEndReached={props.hasMore&&props.onUpdate || null}
            
            renderItem={({item, index}) => {

              
              return (
               
            <List>
            
                <Card id={item._id}id={item._id} >
                  <CardLeft>
                    <CardTitle>{item?.title.substr(0,27)+'...'}</CardTitle>
                    <CardMiddle>
                      <LocationImg
                        source={require('../../../Assets/Images/IconLocation.png')}
                      />
                      <CardMiddleContents>
                        <CardMiddleText>
                          {item?.location?.area }      
                          {item?.location?.country}
                          {', '}
                          {item?.location?.city}
                        </CardMiddleText>
                        <CardMiddleText>
                          {item?.startDate.substr(0, 10)}
                          {' ~ '}
                          {item?.endDate.substr(0, 10)}
                        </CardMiddleText>
                      </CardMiddleContents>
                    </CardMiddle>
                    <CardWriter>
                      <WriterPhoto>
                        <ImageBox
                          source={require('../../../Assets/Images/IconUserPhoto.png')}
                        />
                      </WriterPhoto>
                      <WriterName>{item?.writer.name}</WriterName>
                    </CardWriter>
                  </CardLeft>
                  <CardRight>
                    <Button_2  onPress={props.scrapBtn}>
                      <ScrapButton
                        source={require('../../../Assets/Images/IconScrap_G.png')}
                        resizeMode="cover"
                      />
                    </Button_2 >
                  </CardRight>
                </Card>
                </List>);
            }}
          />
        </Body>
        <WriteBtn onPress={props.goToWrite}>
          <CountryImage
            source={require('../../../Assets/Images/GoToWrite_2.png')}
            resizeMode="cover"
            imageStyle={{borderRadius: 10}}
          />
        </WriteBtn>
      </Container>
    </>
  );
}
