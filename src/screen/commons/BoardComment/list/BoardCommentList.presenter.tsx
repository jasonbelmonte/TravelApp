import React from 'react';
import CommentListItemUI from './BoardCommentList.presenterItem';

import {BoardCommentWrapper} from './BoardCommentList.styles';

export default function BoardCommentListUI(props: any) {
  return (
    <BoardCommentWrapper>
      {props.data?.fetchComments.map((data: any) => (
        <CommentListItemUI data={data} key={data._id} />
      ))}
    </BoardCommentWrapper>
  );
}
