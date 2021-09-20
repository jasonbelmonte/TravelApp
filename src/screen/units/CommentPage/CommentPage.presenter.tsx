import React from 'react';
import {ScrollView} from 'react-native';
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

export default function CommentPageUI(props: any) {
  return (
    <Body>
      {/* //! -- Header -- */}
      <CommentPageHeader>
        <Button onPress={() => props.navigation.goBack(null)}>
          <GoToBack source={require('../../../Assets/Images/GoToBack_B.png')} />
        </Button>
        <TitleBox>
          <Title>댓글</Title>
        </TitleBox>
      </CommentPageHeader>

      {/* //! -- Contents - Comment  -- */}
      <ScrollView>
        <BoardCommentList />
      </ScrollView>
      {/* //! -- Writer -- */}
      <BoardCommentWrite />
    </Body>
  );
}
