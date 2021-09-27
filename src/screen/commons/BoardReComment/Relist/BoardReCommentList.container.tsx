import React from 'react';
import {useQuery} from '@apollo/client';
import BoardReCommentListUI from './BoardReCommentList.presenter';
import {FETCH_RE_COMMENTS} from './BoardReCommentList.queries';

export default function BoardReCommentList(props: any) {
  const {data} = useQuery(FETCH_RE_COMMENTS, {
    variables: {
      boardCommentId: props.boardCommentId,
    },
  });

  return (
    <BoardReCommentListUI
      data={data}
      boardCommentId={props.boardCommentId}
      isReplyOpen={props.isReplyOpen}
      setIsReplyOpen={props.setIsReplyOpen}
    />
  );
}
