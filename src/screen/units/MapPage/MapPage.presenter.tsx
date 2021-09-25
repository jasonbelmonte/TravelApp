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
  // console.log("data",props.data.fetchBoards)
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
                    width: 60,
                    height: 60,
                  }}>
                  {/* <Icon name={'street-view'} size={30} color={'darkred'} /> */}
                  <ImageBackground
                    source={
                      // uri:
                      //   `${data?.images[0]}` ||
                      require('../../../Assets/Images/IconUserPhoto.png')
                    }
                    style={{
                      height: 50,
                      width: 50,
                    }}
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
          <Image
            source={{uri: `${props.datas?.fetchBoard.images[0]}`}}
            style={{width: 50, height: 50}}
            resizeMode="cover"
          />
          <View>
            <Text numberOfLines={1}>{props.datas?.fetchBoard.title}</Text>

            <Text numberOfLines={1}>{props.datas?.fetchBoard.contents}</Text>
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
