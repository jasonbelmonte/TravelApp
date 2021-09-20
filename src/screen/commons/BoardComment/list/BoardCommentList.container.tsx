import React from 'react';
import {useQuery} from '@apollo/client';
import BoardCommentListUI from './BoardCommentList.presenter';
import {FETCH_COMMENTS} from './BoardCommentList.queries';

export default function BoardCommentList() {
  const {data} = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: '61433da3186161005b81b177',
    },
  });
  console.log('댓글 데이터 : ', data);

  return <BoardCommentListUI data={data} />;
}
