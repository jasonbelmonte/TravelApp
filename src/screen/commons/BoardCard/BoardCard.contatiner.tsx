import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import BoardCardUI from './BoardCard.presenter';
import {FETCH_BOARDS} from './BoardCard.queries';

export default function BoardCard({navigation}) {
  const [page, setPage] = useState(1);
  const {data, fetchMore} = useQuery(FETCH_BOARDS, {
    variables: {
      page: page,
    },
  });
  console.log('data : ', data);

  const scrapBtn = () => {
    console.log('sss');
  };
  const goToBoardDetail = () => {
    navigation.navigate('BoardDetailPage');
  };

  return (
    <BoardCardUI
      data={data}
      goToBoardDetail={goToBoardDetail}
      scrapBtn={scrapBtn}
      fetchMore={fetchMore}
    />
  );
}
