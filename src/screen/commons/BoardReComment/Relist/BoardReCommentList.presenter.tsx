import React from 'react';
import ReCommentListItemUI from './BoardReCommentList.presenterItem';
import BoardReCommentWrite from '../Rewrite/BoardReCommentWrite.container';
export default function BoardReCommentListUI(props: any) {
  return (
    <>
      {props.data?.fetchReComments?.map((data: any) => (
        <ReCommentListItemUI
          data={data}
          key={data._id}
          boardCommentId={props.boardCommentId}
        />
      ))}

      {props.isReplyOpen && (
        <BoardReCommentWrite
          boardCommentId={props.boardCommentId}
          setIsReplyOpen={props.setIsReplyOpen}
        />
      )}
    </>
  );
}
