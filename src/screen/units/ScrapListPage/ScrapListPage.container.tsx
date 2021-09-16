import React from 'react';
import ScrapListPageUI from './ScrapListPage.presenter';
// import MapView from 'react-native-maps';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS_I_SCRAPPED } from './ScrapListPage.queries';

export default function ScrapListPage() {
  const { data } = useQuery (FETCH_BOARDS_I_SCRAPPED)

  return <ScrapListPageUI data={data} />;
}
