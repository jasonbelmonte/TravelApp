import {useQuery} from '@apollo/client';
import React from 'react';
import BoardCardUI from './BoardCard.presenter';
import {FETCH_BOARDS} from './BoardCard.queries';

export default function BoardCard() {
  const {data} = useQuery(FETCH_BOARDS, {
    variables: {
      startDate: '2000-01-01',
      endDate: '2100-01-01',
    },
  });
  console.log('data : ', data);

  const scrapBtn = () => {
    console.log('sss');
  };

  return <BoardCardUI data={data} scrapBtn={scrapBtn} />;
}
