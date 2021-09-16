import React from 'react';
import BoardReCommentListUI from '../../BoardReComment/Relist/BoardReCommentList.presenter';
import CommentListItemUI from './BoardCommentList.presenterItem';
import {BoardCommentWrapper, CommentList} from './BoardCommentList.styles';

export default function BoardCommentListUI() {
  return (
    <BoardCommentWrapper>
      <CommentListItemUI />
      <CommentListItemUI />
      <CommentListItemUI />
      <BoardReCommentListUI />
    </BoardCommentWrapper>
  );
}
