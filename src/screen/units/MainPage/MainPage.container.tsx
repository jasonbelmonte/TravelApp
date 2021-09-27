import {useQuery, NetworkStatus} from '@apollo/client';
import {} from '@apollo/client/utilities';
import React, {useRef} from 'react';
import {useState} from 'react';

import {Animated} from 'react-native';
import MainPageUI from './MainPage.presenter';
import {FETCH_BOARDS, FETCH_USER_LOGGED_IN} from './MainPage.queries';
import RNAndroidKeyboardAdjust from 'rn-android-keyboard-adjust';

export default function MainPage({navigation}) {
  console.disableYellowBox = true;
  const AreaArray = [
    {
      picture: require('../../../Assets/Images/MainEuropeImg.png'),
      picture2: require('../../../Assets/Images/AreaListEuropeImg.png'),
      picture3: require('../../../Assets/Images/SearchEuropeImg.png'),
      text: 'Europe',
      textKorean: '유럽',
    },
    {
      picture: require('../../../Assets/Images/MainSouthAmericaImg.png'),
      picture2: require('../../../Assets/Images/AreaListSouthAmericaImg.png'),
      picture3: require('../../../Assets/Images/SearchSouthAmericaImg.png'),

      text: 'South America',
      textKorean: '남아메리카',
    },
    {
      picture: require('../../../Assets/Images/MainNorthAmericaImg.png'),
      picture2: require('../../../Assets/Images/AreaListNorthAmericaImg.png'),
      picture3: require('../../../Assets/Images/SearchNorthAmericaImg.png'),
      text: 'North America',
      textKorean: '북아메리카',
    },
    {
      picture: require('../../../Assets/Images/MainAsiaImg.png'),
      picture2: require('../../../Assets/Images/AreaListAsiaImg.png'),
      picture3: require('../../../Assets/Images/SearchAsiaImg.png'),
      text: 'Asia',
      textKorean: '아시아',
    },
    {
      picture: require('../../../Assets/Images/MainAfreecaImg.png'),
      picture2: require('../../../Assets/Images/AreaListAfreecaImg.png'),
      picture3: require('../../../Assets/Images/SearchAfreecaImg.png'),
      text: 'Africa',
      textKorean: '아프리카',
    },
    {
      picture: require('../../../Assets/Images/MainOceaniaImg.png'),
      picture2: require('../../../Assets/Images/AreaListOceaniaImg.png'),
      picture3: require('../../../Assets/Images/SearchOceaniaImg.png'),
      text: 'Oceania',
      textKorean: '오세아니아',
    },
  ];
  // console.log(AreaArray[0].picture);
  const goToWrite = () => {
    navigation.navigate('Write');
    RNAndroidKeyboardAdjust.setAdjustPan();
  };
  const goToAreaPage = area => () => {
    navigation.navigate('AreaPage', {area: area});
  };

  const goToDetailPage = id => () => {
    navigation.navigate('BoardDetailPage', {id: id});
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const diffClamp = Animated.diffClamp(scrollY, 0, 190);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 190],
    outputRange: [0, -190],
  });

  const [hasMore, setHasMore] = useState(true);

  const {data, refetch, loading, fetchMore, networkStatus} = useQuery(
    FETCH_BOARDS,
    {
      variables: {
        startDate: '2000-01-01',
        endDate: '2100-01-01',
      },
    },
  );
  console.log(data);
  const {data: user} = useQuery(FETCH_USER_LOGGED_IN);
  const onUpdate = () => {
    if (!data) return;
    fetchMore({
      variables: {page: Math.ceil(data?.fetchBoards.length / 10) + 1},
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult.fetchBoards.length) setHasMore(false);
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  const refreshing = networkStatus === NetworkStatus.refetch;

  return (
    <MainPageUI
      translateY={translateY}
      scrollY={scrollY}
      data={data}
      user_id={user?.fetchUserLoggedIn?._id}
      goToWrite={goToWrite}
      refetch={refetch}
      hasMore={hasMore}
      onUpdate={onUpdate}
      refreshing={refreshing}
      goToAreaPage={goToAreaPage}
      goToDetailPage={goToDetailPage}
      AreaArray={AreaArray}
    />
  );
}
