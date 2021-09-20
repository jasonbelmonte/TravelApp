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
  
  // console.log('data : ', data.fetchBoardsIWrote.length);
  // const onLoadMore = () => {
  //   if (!data) return;
  //   fetchMore({
  //     variables: {
  //       page: Math.floor(data?.fetchBoardsIWrote.length) / 10 + 1,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       // if (prev.fetchUseditems.length > 100) setHasMore(false);
  //       return {
  //         fetchBoardsIWrote: [
  //           ...prev.fetchBoardsIWrote,
  //           ...fetchMoreResult.fetchBoardsIWrote,
  //         ],
  //       };
  //     },
  //   });
  // };
  

  return <BoardCardUI data={data}  />;
}
