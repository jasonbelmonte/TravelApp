import {
  View,
  MarkView,
  Title,
  TimeAndPlace,
  Heading,
  TextRowWrapper,
  TextWrapper,
  Recruitment,
} from './MapPage.styles';
import React from 'react';
// import {Text, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getDate} from '../../commons/libraries/getdate';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
export default function MapPageUI(props: any) {
  return (
    <>
      <View style={{flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex: 1}}
          initialRegion={{
            latitude: props.location.latitude,
            longitude: props.location.longitude,
            latitudeDelta: 15,
            longitudeDelta: 15,
          }}>
          {props.data?.fetchBoards?.map((data, index) => {
            return data?.location?.lat ? (
              <Marker
                onPress={props.showCard(data._id)}
                key={uuidv4()}
                coordinate={{
                  latitude: data?.location?.lat,
                  longitude: data?.location?.lng,
                }}
                title={data?.title}
                description="this is a marker example">
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    borderWidth: 3,
                    borderColor: 'white',
                  }}>
                  {/* <Icon name={'street-view'} size={30} color={'darkred'} /> */}
                  <ImageBackground
                    source={
                      {
                        uri: `https://storage.googleapis.com/${data?.writer?.picture}`,
                      } || require('../../../Assets/Images/IconUserPhoto.png')
                    }
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    imageStyle={{borderRadius: 50}}
                    resizeMode="cover"
                  />
                </View>
                <Callout onPress={props.onPressCard(data._id)}>
                  <MarkView>
                    <Title>{data?.title}</Title>
                    <TextRowWrapper>
                      <Heading>시간 :</Heading>
                      <TimeAndPlace>
                        {getDate(data.startDate) + '~' + getDate(data.endDate)}
                      </TimeAndPlace>
                    </TextRowWrapper>
                    <TextRowWrapper>
                      <Heading>장소 :</Heading>
                      <TimeAndPlace>
                        {data?.location.country + ', ' + data?.location.city}
                      </TimeAndPlace>
                    </TextRowWrapper>
                    <TextRowWrapper></TextRowWrapper>
                    <TextWrapper>
                      <Recruitment>{'>'} 동행하기</Recruitment>
                    </TextWrapper>
                  </MarkView>
                </Callout>
              </Marker>
            ) : null;
          })}
        </MapView>
        {/* <Animated.View style={props.styles.card}>
          <View
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
              padding: 12,
            }}>
            <ImageBackground
              imageStyle={{borderRadius: 10}}
              style={{width: 70, height: 70, marginRight: 9}}
              source={{
                uri: `https://storage.googleapis.com/${props.datas?.fetchBoard.images[0]}`,
              }}></ImageBackground>
            <View style={{}}>
              <Text style={{fontSize: 15, fontWeight: '700'}} numberOfLines={1}>
                {props.datas?.fetchBoard.title}
              </Text>
              <Text numberOfLines={1}>{props.datas?.fetchBoard.contents}</Text>
            </View>

            <View>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={[
                    props.styles.textSign,
                    {
                      color: '#FF6347',
                    },
                  ]}></Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View> */}
      </View>
    </>
  );
}
