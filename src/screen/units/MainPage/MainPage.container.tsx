import { useQuery ,NetworkStatus, InMemoryCache} from '@apollo/client';
import { offsetLimitPagination, relayStylePagination } from '@apollo/client/utilities';
import React, { useRef } from 'react';
import { useState } from 'react';

import {
  Animated,

} from 'react-native';
import MainPageUI from './MainPage.presenter';
import {FETCH_BOARDS} from './MainPage.queries';
export default function MainPage({navigation, route}) {

  const goToWrite = () => {
    navigation.navigate('Write');
  };
  const goToAreaPage = () => {
    navigation.push('AreaPage');
  };



  // console.log('data', faker.address.country());
  
  const scrollY = useRef(new Animated.Value(0)).current
  
  const diffClamp = Animated.diffClamp(scrollY, 0, 180);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 180],
    outputRange: [0, -180],
  });
 
  const [hasMore, setHasMore] = useState(true);
  const {data,refetch,loading, fetchMore,networkStatus } = useQuery(FETCH_BOARDS, {
    variables: {
      startDate: '2000-01-01',
      endDate: '2100-01-01',
      
    },
    notifyOnNetworkStatusChange: true,
  });
  console.log(data)
  // const scrolly = React.useRef(new Animated.Value(0)).current;
  // const ITEM_SIZE = 70 + 20 * 3;
  const onUpdate = () => {
   
    if (!data) return;
   fetchMore({
      variables:{ page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
    
      updateQuery: (prev, { fetchMoreResult }) => {
        // cache 수정이랑 비슷함  , prev하면 기존에 있던 cache전체 , fetchMoreResult(매게변수) 2페이지
        if (!fetchMoreResult.fetchBoards.length)  setHasMore(false);
  
        return {
          fetchBoards: [...prev.fetchBoards ,...fetchMoreResult.fetchBoards],
        };
        // 기존에 배열 10개가 있었을 것 , 배열이니깐 스프레드 시켜서 객체로, 20개짜리(기존 10,새로운 10) 배열로 만들어줌
      },
    });
  };
    console.log("good", data?.fetchUseditems);



// const refreshing = data.networkStatus 
const refreshing = networkStatus === NetworkStatus.refetch
// prevent the loading indicator from appearing while refreshing
const onClikWritePage = () => {
  navigation.navigate('BoardDetailPage',data._id);
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
      
    />
  );
}
