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
import { Image, StyleSheet, Text, TouchableOpacity,Animated, } from 'react-native';

// import MapView from 'react-native-maps';

export default function MapPageUI(props:any,{navigation}) {
  const styles = StyleSheet.create({

  
    card: {
      // padding: 20,
      elevation: 2,
      backgroundColor: "#FFF",
      borderRadius:5,
      marginBottom: 20,
      height:100,
      width: "90%" ,
      overflow: "hidden",
      position:"absolute",
      bottom: 50,
      left: 20,
      right: 0,
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 2,
      padding: 10,
    },
    cardtitle: {
      fontSize: 12,
      // marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
      width:50,
      height:50,
    },
    marker: {
      width: 30,
      height: 30,
    },
    button: {
      alignItems: 'center',
      marginTop: 5
    },
    signIn: {
        width: '100%',
        padding:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
  })

 
  // console.log("data",props.data.fetchBoards)
  return (
    <>
      <View style={{flex: 1,}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{flex:1,}}
          initialRegion={{
            latitude: props.location.latitude,
            longitude: props.location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
               {props.data?.fetchBoards?.map((data,index)=>{

                 return(
                  <Marker
                  key={index}
                  coordinate={{
                    latitude: data?.location?.lat ||props.location.latitude ,
                    longitude: data?.location?.lng ||props.location.longitude
                  }}
                
                  title={data?.title}
                  description="this is a marker example">
                  <Callout
                  onPress={() =>
                    navigation.navigate('게시물 읽기', {
                      id: data._id,
                    })
                  }
      
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
                 )
          
            })}
        </MapView>
        
     
         
            <View style={styles.card} >
            <Image 
              source={props.datas?.fetchBoard.images[0]}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>{props.datas?.fetchBoard.title}</Text>
              
              <Text numberOfLines={1} style={styles.cardDescription}>{props.datas?.fetchBoard.title}</Text>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[styles.signIn]}
                >
                  <Text style={[styles.textSign, {
                    color: '#FF6347'
                  }]}>Order Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
       
  
      </View>
    </>
  );
  
}

