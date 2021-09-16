import React from 'react';
import BoardReCommentListUI from '../../BoardReComment/Relist/BoardReCommentList.presenter';
import CommentListItemUI from './BoardCommentList.presenterItem';
import {
  BoardCommentWrapper,
  CommentTitleBox,
  CommentIcon,
  CommentTitle,
  CommentList,
} from './BoardCommentList.styles';

export default function BoardCommentListUI() {
  return (
    <BoardCommentWrapper>
      <CommentTitleBox>
        <CommentIcon
          source={require('../../../../Assets/Images/IconComment_B.png')}
        />
        <CommentTitle>댓글</CommentTitle>
      </CommentTitleBox>

      <CommentList>
        <CommentListItemUI />
      </CommentList>
      <BoardReCommentListUI />
    </BoardCommentWrapper>
  );
}
