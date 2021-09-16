import {useQuery, useMutation} from '@apollo/client';
import React from 'react';
import BoardCardUI from './BoardCard.presenter';
import {FETCH_BOARDS_USER_WROTE, SCRAP_BOARD} from './BoardCard.queries';

export default function BoardCard() {
  const {data} = useQuery(FETCH_BOARDS_USER_WROTE, {
    variables: {
      userId: "61405d2bbf73a1002a625ce7",
    },
  });
  const [scrapboard] = useMutation(SCRAP_BOARD)
  console.log('data : ', data);

  const Scrapping = (id) => async() => {
    const result = await scrapboard({
      variables : {boardId : id }
    })
    console.log(result)
  }

  return <BoardCardUI data={data} Scrapping={Scrapping} />;
}
