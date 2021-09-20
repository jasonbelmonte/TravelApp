import React from 'react';
import {useQuery} from '@apollo/client';
import BoardReCommentListUI from './BoardReCommentList.presenter';
import {FETCH_RE_COMMENTS} from './BoardReCommentList.queries';

export default function BoardReCommentList(props: any) {
  const {data} = useQuery(FETCH_RE_COMMENTS, {
    variables: {
      boardCommentId: props.data._id,
    },
  });

  return <BoardReCommentListUI data={data} boardCommentId={props.data._id} />;
}
