import React from 'react';
import ScrapListPageUI from './ScrapListPage.presenter';
// import MapView from 'react-native-maps';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS_I_SCRAPPED } from './ScrapListPage.queries';

export default function ScrapListPage({navigation}) {
  const { data } = useQuery (FETCH_BOARDS_I_SCRAPPED)
  const gotoBoardDetailPage = (id) =>() => {
    navigation.navigate('BoardDetailPage', {id: id})
  }

  return <ScrapListPageUI 
  data={data}
  gotoBoardDetailPage={gotoBoardDetailPage}
  />;
}

