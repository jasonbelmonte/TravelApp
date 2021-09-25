import {useQuery, NetworkStatus, InMemoryCache} from '@apollo/client';
import {
  offsetLimitPagination,
  relayStylePagination,
} from '@apollo/client/utilities';
import React, {useEffect, useRef} from 'react';
import {useState} from 'react';

import {Animated} from 'react-native';
import MainPageUI from './MainPage.presenter';
import {FETCH_BOARDS} from './MainPage.queries';

export default function MainPage({navigation, route}) {
  const AreaArray = [
    {
      picture: require('../../../Assets/Images/MainEuropeImg.png'),
      text: 'Europe',
      textKorean: '유럽',
    },
    {
      picture: require('../../../Assets/Images/MainSouthAmericaImg.png'),
      text: 'South America',
      textKorean: '남아메리카',
    },
    {
      picture: require('../../../Assets/Images/MainNorthAmericaImg.png'),
      text: 'North America',
      textKorean: '북아메리카',
    },
    {
      picture: require('../../../Assets/Images/MainAsiaImg.png'),
      text: 'Asia',
      textKorean: '아시아',
    },
    {
      picture: require('../../../Assets/Images/MainAfreecaImg.png'),
      text: 'Africa',
      textKorean: '아프리카',
    },
    {
      picture: require('../../../Assets/Images/MainOceaniaImg.png'),
      text: 'Oceania',
      textKorean: '오세아니아',
    },
  ];
  console.log(AreaArray[0].picture);
  const goToWrite = () => {
    navigation.navigate('Write');
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
      notifyOnNetworkStatusChange: true,
    },
  );
  console.log(data);

  const onUpdate = () => {
    if (!data) return;
    fetchMore({
      variables: {page: Math.ceil(data?.fetchBoards.length / 10) + 1},
      updateQuery: (prev, {fetchMoreResult}) => {
        // cache 수정이랑 비슷함  , prev하면 기존에 있던 cache전체 , fetchMoreResult(매게변수) 2페이지
        if (!fetchMoreResult.fetchBoards.length) setHasMore(false);
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
        // 기존에 배열 10개가 있었을 것 , 배열이니깐 스프레드 시켜서 객체로, 20개짜리(기존 10,새로운 10) 배열로 만들어줌
      },
    });
  };
  // const cache = new InMemoryCache({
  //   typePolicies: {
  //     Query: {
  //       fields: {
  //         fetchBoards: offsetLimitPagination(),
  //       },
  //     },
  //   },
  // });

  // console.log('good', data?.fetchUseditems);

  // const refreshing = data.networkStatus
  const refreshing = networkStatus === NetworkStatus.refetch;
  // prevent the loading indicator from appearing while refreshing

  const onClikWritePage = id => () => {
    navigation.navigate('BoardDetailPage', {id: id});
  };

  return (
    <MainPageUI
      translateY={translateY}
      scrollY={scrollY}
      data={data}
      goToWrite={goToWrite}
      refetch={refetch}
      hasMore={hasMore}
      onUpdate={onUpdate}
      refreshing={refreshing}
      goToAreaPage={goToAreaPage}
      onClikWritePage={onClikWritePage}
      goToDetailPage={goToDetailPage}
      AreaArray={AreaArray}
    />
  );
}
