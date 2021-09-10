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
// import MapView from 'react-native-maps';

export default function MapPageUI(props) {
  return (
    <>
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{width: '100%', height: '100%'}}
          initialRegion={{
            latitude: props.location.latitude,
            longitude: props.location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          <Marker
            coordinate={{
              latitude: props.location.latitude,
              longitude: props.location.longitude,
            }}
            // icon={require('../Assets/Images/Pig.png')}
            title="this is a marker"
            description="this is a marker example">
            <Callout
            // onPress={() =>
            //   navigation.navigate('게시물 읽기', {
            //     id: data._id,
            //   })
            // }
            >
              <MarkView>
                <Title>{/* {data?.title} */}</Title>
                <TextRowWrapper>
                  <Heading>시간 :</Heading>
                  <TimeAndPlace>{/* {data?.date} */}</TimeAndPlace>
                </TextRowWrapper>
                <TextRowWrapper>
                  <Heading>장소 :</Heading>
                  <TimeAndPlace>{/* {data?.place} */}</TimeAndPlace>
                </TextRowWrapper>
                <TextRowWrapper>
                  <Heading>모집 인원:</Heading>
                  <TimeAndPlace>
                    {/* {data?.countMember} / {data?.recruitment} */}
                  </TimeAndPlace>
                </TextRowWrapper>
                <TextWrapper>
                  <Recruitment>{'>'} 동행하기</Recruitment>
                </TextWrapper>
              </MarkView>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </>
  );
}
