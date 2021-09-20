import React from 'react';
import ReCommentListItemUI from './BoardReCommentList.presenterItem';

export default function BoardReCommentListUI(props: any) {
  return (
    <>
      {props.data?.fetchReComments?.map((data: any) => (
        <ReCommentListItemUI data={data} />
      ))}
    </>
  );
}
