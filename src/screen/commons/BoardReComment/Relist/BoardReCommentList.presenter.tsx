import React from 'react';
import ReCommentListItemUI from './BoardReCommentList.presenterItem';
import {
  BoardReCommentWrapper,
  ReCommentList,
} from './BoardReCommentList.styles';

export default function BoardReCommentListUI() {
  return (
    <BoardReCommentWrapper>
      <ReCommentList>
        <ReCommentListItemUI />
      </ReCommentList>
    </BoardReCommentWrapper>
  );
}
