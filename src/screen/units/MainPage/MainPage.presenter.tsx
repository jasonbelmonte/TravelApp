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
  HeaderBar,
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
  Button_2,
  AreaListWrap,
} from './MainPage.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Animated, RefreshControl, ScrollView} from 'react-native';

import {v4 as uuidv4} from 'uuid';
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
              <Button onPress={props.goToAreaPage}>
                <CountryImage
                  source={require('../../../Assets/Images/MainEuropeImg.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>Europe</ClickText>
                </CountryImage>
              </Button>
              <Button onPress={props.goToAreaPage}>
                <CountryImage
                  source={require('../../../Assets/Images/MainSouthAmericaImg.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>South America</ClickText>
                </CountryImage>
              </Button>
              <Button onPress={props.goToAreaPage}>
                <CountryImage
                  source={require('../../../Assets/Images/MainNorthAmericaImg.png')}
                  resizeMode="cover"
                  imageStyle={{borderRadius: 10}}>
                  <ClickText>North America</ClickText>
                </CountryImage>
              </Button>
              <Button onPress={props.goToAreaPage}>
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
            <HeaderBar>
              <Colum
                style={{
                  fontWeight: '700',
                  fontSize: 17,
                }}>
                동행 찾기
              </Colum>
            </HeaderBar>
          </Head>
        </Animated.View>
        <Body>
          <Animated.FlatList
            contentContainerStyle={{
              paddingTop: 180 + 30,
              paddingBottom: 60,
              zIndex: 1000,
            }}
            bounces={false}
            scrollEventThrottle={16}
            onScroll={e => {
              props.scrollY.setValue(e.nativeEvent.contentOffset.y);
            }}
            data={props.data?.fetchBoards}
            keyExtractor={item => item._id}
            // refreshing={props.refreshing === 4}
            // onRefresh={()=>props.data.refetch}
            refreshControl={
              <RefreshControl
                style={{position: 'absolute', top: 700}}
                refreshing={props.refreshing}
                onRefresh={() => props.refetch()}
              />
            }
            onEndReachedThreshold={1}
            onEndReached={(props.hasMore && props.onUpdate) || null}
            renderItem={({item}) => {
              return (
                <List key={uuidv4()} id={item._id}>
                  <Card onPress={props.goToDetailPage(item._id)}>
                    <CardLeft>

                     
          <CardTitle >{ item?.title.length >= 24 ? item?.title.substr(0, 24) + '..' : item?.title}</CardTitle>

                      <CardMiddle>
                        <LocationImg
                          source={require('../../../Assets/Images/IconLocation.png')}
                        />
                        <CardMiddleContents>
                          <CardMiddleText>
                            {item?.location?.area}
                            {', '}
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
                      <Button_2 onPress={props.scrapBtn}>
                        <ScrapButton
                          source={require('../../../Assets/Images/IconScrap_G.png')}
                          resizeMode="cover"
                        />
                      </Button_2>
                    </CardRight>
                  </Card>
                </List>
              );
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
