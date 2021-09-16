import React from 'react';
import BoardCommentList from '../../commons/BoardComment/list/BoardCommentList.container';
import BoardCommentWrite from '../../commons/BoardComment/write/BoardCommentWrite.container';
import {
  Body,
  CommentPageHeader,
  Button,
  GoToBack,
  TitleBox,
  Title,
} from './CommentPage.styles';

export default function CommentPageUI() {
  return (
    <>
      <Body>
        <CommentPageHeader>
          <Button>
            <GoToBack
              source={require('../../../Assets/Images/GoToBack_B.png')}
            />
          </Button>
          <TitleBox>
            <Title>댓글</Title>
          </TitleBox>
        </CommentPageHeader>
      </Body>
      <BoardCommentList />
      <BoardCommentWrite />
    </>
  );
}
