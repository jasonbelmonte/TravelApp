import {useQuery, useMutation} from '@apollo/client';
import React from 'react';
import BoardCardUI from './BoardCard.presenter';
import {FETCH_BOARDS_USER_WROTE, SCRAP_BOARD} from './BoardCard.queries';

export default function BoardCard(props) {
  const {data} = useQuery(FETCH_BOARDS_USER_WROTE, {
    variables: {
      userId: props.userId,
    },
  });
  const [scrapboard] = useMutation(SCRAP_BOARD);
  console.log('data : ', data);

  const Scrapping = id => async () => {
    const result = await scrapboard({
      variables: {boardId: id},
    });
    console.log(result);
  };

  const gotoUserpage = id => () => {
    props.navigation.navigate('UserPage', {id: id});
  };

  const goToBoardDetail = id => () => {
    props.navigation.navigate('BoardDetailPage', {id: id});
  };
  return (
    <BoardCardUI
      data={data}
      Scrapping={Scrapping}
      gotoUserpage={gotoUserpage}
      goToBoardDetail={goToBoardDetail}
    />
  );
}
