import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
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

export default function CommentPageUI({navigation}) {
  return (
    <Body>
      {/* //! -- Header -- */}
      <CommentPageHeader>
        <Button>
          <GoToBack
            onPress={() => navigation.goBack(null)}
            source={require('../../../Assets/Images/GoToBack_B.png')}
          />
        </Button>
        <TitleBox>
          <Title>댓글</Title>
        </TitleBox>
      </CommentPageHeader>

      {/* //! -- Contents - Comment  -- */}
      <ScrollView horizontal={false}>
        <BoardCommentList />
      </ScrollView>

      {/* //! -- Writer -- */}
      <BoardCommentWrite />
    </Body>
  );
}
