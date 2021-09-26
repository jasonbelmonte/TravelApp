import {useQuery} from '@apollo/client';
import React from 'react';
import AreaPage from '../../units/AreaPage/AreaPage.container';
import BoardCardUI from './BoardCard.presenter';
import {FETCH_BOARDS} from './BoardCard.queries';

export default function BoardCard(props: any) {
  const {data, fetchMore} = useQuery(FETCH_BOARDS, {
    variables: {area: props.area.textKorean},
  });
  console.log('data : ', data);

  const scrapBtn = () => {
    console.log('sss');
  };
  const goToBoardDetail = id => () => {
    props.navigation.push('BoardDetailPage', {id: id});
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
