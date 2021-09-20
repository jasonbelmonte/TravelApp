import React from 'react';
import {
  CommentWritetWrapper,
  WriteBox,
  InputBox,
  Button,
  DeleteIcon,
} from './BoardCommentWrite.styles';

export default function BoardCommentWriteUI() {
  return (
    <CommentWritetWrapper>
      <WriteBox>
        <InputBox placeholder={'Add Comment...'} />
        <Button>
          <DeleteIcon
            source={require('../../../../Assets/Images/IconArrowToTop_G.png')}
          />
        </Button>
      </WriteBox>
    </CommentWritetWrapper>
  );
}
