import React, {useState, useEffect} from 'react';
import MapView, {
  Callout,
  MapEvent,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {
  Alert,
  Dimensions,
  Image,
  TouchableOpacity,
  View,
  Text,
  ToastAndroid,
  Button,
  StyleSheet,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
import {useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Map01UI(props: any) {
  interface ILocation {
    latitude: number;
    longitude: number;
  }
  const [location, setLocation] = useState<ILocation | undefined>(undefined);
  const [region, setRegion] = useState({
    locality: '',
    country: '',
    lat: '',
    lng: '',
  });
  const [currentAddress, setCurrentAddress] = useState('');
  const [regionChangeProgress, setRegionChangeProgress] = useState(false);

  useEffect(() => {
    handleUser();
  }, []);
  const markerRef = useRef(null);

  const handleUser = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
      },

      error => {
        console.log(error.code, error.message);
      },

      {enableHighAccuracy: true, timeout: 30000, maximumAge: 1000},
    );
  };

  // const fetchAddress = (lat,lng) => {
  //   fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + lat +lng + "&key=" + "AIzaSyCiZhmIrIuujupQJICQm7ZcLojjl0iPD-s")
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       let addr = responseJson.results[0].formatted_address;
  //       // let addr =(res[0].formattedAddress)
  //       let locality =(responseJson.results[0].locality )
  //       let country =( responseJson.results[0].country)
  //       setCurrentAddress(addr)
  //       setRegion({locality:locality,country:country})
  //       setRegionChangeProgress(false)
  //     });
  // }

  const getAddress = async (lat, lng) => {
    // simply add your google key
    Geocoder.fallbackToGoogle('AIzaSyCiZhmIrIuujupQJICQm7ZcLojjl0iPD-s');
    try {
      let res = await Geocoder.geocodePosition({lat, lng});

      let addr = res[0].formattedAddress;
      let locality = res[0].locality || res[0].adminArea;
      let country = res[0].country;
      setCurrentAddress(addr);
      setRegion({locality: locality, country: country, lat: lat, lng: lng});
      setRegionChangeProgress(false);
      console.log('city,', region);
    } catch (error) {
      console.log(error);
    }
  };
  function onChangeValue(location) {
    if (markerRef && markerRef.current && markerRef.current.showCallout) {
      markerRef.current.showCallout();
    }

    // ToastAndroid.show(JSON.stringify(location),ToastAndroid.SHORT)
    // alert(JSON.stringify(location))
    setLocation(location);
    setRegionChangeProgress(true);
    // console.log(currentAddress)
    getAddress(location.latitude, location.longitude);
  }

  const onClickSelect = () => {
    props.setOnLocationSelect({
      country: region.country,
      city: region.locality,
      lat: region.lat,
      lng: region.lng,
    });
    props.setMap(false);
  };

  const styles = StyleSheet.create({
    deatilSection: {
      // flex: 1,
      height: 200,
      backgroundColor: '#fff',
      padding: 10,
      display: 'flex',
      justifyContent: 'flex-start',
    },

    btnContainer: {
      width: Dimensions.get('window').width - 20,
      position: 'absolute',
      bottom: 30,
      left: 10,
    },
  });

  return (
    <>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: '#00000099',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 20,
            paddingTop: 20,
            paddingLeft: 20,
          }}>
          <TouchableOpacity onPress={() => props.setMap(false)}>
            <Image
              source={require('../../../Assets/Images/IconClose_W.png')}
              style={{width: 13, height: 13}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, paddingTop: 20}}>
          {location && (
            <MapView
              //  customMapStyle={props.mapStyle}
              provider={PROVIDER_GOOGLE}
              showsUserLocation={true}
              showsMyLocationButton={true}
              style={{flex: 1}}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
                // Dimensions.get('window').width /  Dimensions.get('window').width
              }}
              onRegionChange={region => {
                setLocation({
                  latitude: region.latitude,
                  longitude: region.longitude,
                });
              }}
              onRegionChangeComplete={onChangeValue}>
              {/* <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          ref={markerRef}
          title={region.country?"나라: "+region.country:"loading..."}
          description={region.locality?"도시: "+region.locality:"loading..."}
        /> */}
            </MapView>
          )}
          <View style={{top: '30%', left: '44.5%', position: 'absolute'}}>
            <Icon name="location" size={45} color={'red'} />
          </View>

          <View style={styles.deatilSection}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'roboto',
                marginBottom: 20,
              }}>
              위치 찾기
            </Text>
            <Text style={{fontSize: 10, color: '#999'}}>상세주소</Text>
            <Text
              numberOfLines={2}
              style={{
                fontSize: 14,
                paddingVertical: 10,
                borderBottomColor: 'silver',
                borderBottomWidth: 0.5,
              }}>
              {!regionChangeProgress ? currentAddress : '기다려주세요...'}
            </Text>
            <View style={styles.btnContainer}>
              <Button
                title="지역 선택"
                disabled={regionChangeProgress}
                onPress={onClickSelect}></Button>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
