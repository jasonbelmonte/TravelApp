import {useQuery} from '@apollo/client';
import React from 'react';
import BoardCardUI from './BoardCard.presenter';
import {FETCH_BOARDS_I_WROTE} from './BoardCard.queries';

export default function BoardCard() {
  const {data} = useQuery(FETCH_BOARDS_I_WROTE, {
    variables: {
      page: 1,
    },
  });
  
  console.log('data : ', data);

  

  return <BoardCardUI data={data}  />;
}
