import {
  View,
  MarkView,
  Title,
  TimeAndPlace,
  Heading,
  TextRowWrapper,
  TextWrapper,
  Recruitment,
} from './Map01.styles';
import React from 'react';
// import {Text, View} from 'react-native';
import MapView, {Callout, MapEvent, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import { Image, TouchableOpacity,} from 'react-native';
// import MapView from 'react-native-maps';

export default function Map01UI(props:any) {
  const [location, setLocation] = React.useState({
    latitude: 41.3879,
    longitude: 2.16992 ,
  });
 const [poi,setPoi]=React.useState(null)

  const onLocationSelect = (event: MapEvent) => {
    console.log(event.nativeEvent.coordinate);
 
    setLocation({latitude:event.nativeEvent.coordinate.latitude ,longitude:event.nativeEvent.coordinate.latitude })
  }
  const onPoiClick =(event: MapEvent)=>{
    const poi =event.nativeEvent
    setPoi(poi)
    console.log("poi",poi)
  }

  
  return (
    <>
    <View style={{flex: 1,width:"100%" ,height:"100%" ,backgroundColor:"#00000099"}}>
      <View style={{flexDirection:"row",justifyContent:"flex-end",paddingRight:20,paddingTop:20}}>
        <TouchableOpacity onPress={()=>props.setMap(false)}>
        <Image source={require("../../../Assets/Images/IconClose_W.png")} style={{width:13,height:13,}}/>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, paddingTop:20}}>
        <MapView
         
          onPress={onLocationSelect}
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={{width: "100%", height:"90%",}}
          onPoiClick={onPoiClick}
          initialRegion={{
            latitude:  location.latitude ,
            longitude:location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
            
            {poi && ( 
            <Marker
      coordinate={poi.coordinate}
      // icon={require('../Assets/Images/Pig.png')}
      >
      <Callout
      // onPress={() =>

      // }
      >
      </Callout>
    </Marker>)}
         
        </MapView>
      </View>
      </View>
    </>
  );
}
