import {
  View,
  MarkView,
  Title,
  TimeAndPlace,
  Heading,
  TextRowWrapper,
  TextWrapper,
  Line,
} from './MapPage.styles';
import React from 'react';
// import {Text, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {ImageBackground} from 'react-native';
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
                <Callout onPress={props.onPressCard(data._id)} tooltip={true}>
                  <MarkView>
                    <Title>
                      {data?.title.length >= 14
                        ? data?.title.substr(0, 14) + '..'
                        : data?.title}
                    </Title>
                    <Line />
                    <TextWrapper>
                      <TextRowWrapper>
                        <Heading>일정: </Heading>
                        <TimeAndPlace>
                          {getDate(data.startDate) +
                            ' ~ ' +
                            getDate(data.endDate)}
                        </TimeAndPlace>
                      </TextRowWrapper>
                      <TextRowWrapper>
                        <Heading>장소: </Heading>
                        <TimeAndPlace>
                          {data?.location.country + ', ' + data?.location.city}
                        </TimeAndPlace>
                      </TextRowWrapper>
                      <TextRowWrapper></TextRowWrapper>
                    </TextWrapper>
                  </MarkView>
                </Callout>
              </Marker>
            ) : null;
          })}
        </MapView>
      </View>
    </>
  );
}
