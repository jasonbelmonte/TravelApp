import React, {useContext} from 'react';
import ScrapListPageUI from './ScrapListPage.presenter';
// import MapView from 'react-native-maps';
import {useMutation, useQuery} from '@apollo/client';
import {FETCH_BOARDS_I_SCRAPPED, SCRAP_BOARD} from './ScrapListPage.queries';
import {useEffect} from 'react';
import {GlobalContext} from '../../../../App';

export default function ScrapListPage({navigation}) {
  const {data, refetch} = useQuery(FETCH_BOARDS_I_SCRAPPED);

  const [scrapboard] = useMutation(SCRAP_BOARD);

  const gotoBoardDetailPage = id => () => {
    navigation.navigate('BoardDetailPage', {id: id});
  };
  const scrap = id => async () => {
    await scrapboard({
      variables: {boardId: id},
      refetchQueries: [
        {
          query: FETCH_BOARDS_I_SCRAPPED,
        },
      ],
    });
  };
  const show = () => {
    refetch();
  };

  return (
    <ScrapListPageUI
      data={data}
      gotoBoardDetailPage={gotoBoardDetailPage}
      scrap={scrap}
      show={show}
    />
  );
}
