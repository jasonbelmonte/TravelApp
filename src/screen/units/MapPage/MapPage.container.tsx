import {useQuery} from '@apollo/client';
import React, {useRef, useState} from 'react';
import {Animated} from 'react-native';
import {FETCH_BOARDS} from '../MainPage/MainPage.queries';
import MapPageUI from './MapPage.presenter';
import {FETCH_BOARD} from './MapPage.queries';

export default function MapPage({route, navigation}) {
  const [Id, setId] = useState('');
  const [location, setLocation] = useState({
    latitude: 37.17085108319169,
    longitude: -3.596872182433827,
  });

  const {data} = useQuery(FETCH_BOARDS, {
    variables: {
      startDate: '2000-01-01',
      endDate: '2100-01-01',
    },
  });
  const onPressCard = id => () => {
    navigation.navigate('BoardDetailPage', {id: id});
    console.log('aa', data.fetchBoards._id);
  };

  const {data: datas} = useQuery(FETCH_BOARD, {
    variables: {boardId: Id},
  });

  // 카드 애니메이션 효과
  const animatedValue = useRef(new Animated.Value(0)).current;
  const showCard = id => () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setId(id);
  };

  return (
    <MapPageUI
      location={location}
      data={data}
      navigation={navigation}
      datas={datas}
      onPressCard={onPressCard}
      showCard={showCard}
    />
  );
}
