import React from 'react';
import {
  Animated,
  FlatList,
  ListViewComponent,
  ScrollView,
  View,
} from 'react-native';
import MainPageUI from './MainPage.presenter';

export default function MainPage({navigation, route}) {
  const goToWrite = e => {
    navigation.navigate('Write');
  };

  var faker = require('faker');

  // console.log('data', faker.address.country());
  const DATA = [...Array(30).keys()].map((_, index) => {
    return {
      key: faker.datatype.uuid(),
      name: faker.name.findName(),
      title: faker.name.title(),
      image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
        'women',
        'men',
      ])}/${faker.datatype.number(60)}.jpg`,
      jobTitle: faker.name.jobTitle(),
      country: faker.address.country(),
    };
  });
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 190);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 190],
    outputRange: [0, -190],
  });
  // const scrolly = React.useRef(new Animated.Value(0)).current;
  // const ITEM_SIZE = 70 + 20 * 3;

  return (
    <MainPageUI
      translateY={translateY}
      scrollY={scrollY}
      DATA={DATA}
      goToWrite={goToWrite}
    />
  );
}
