import React from 'react';
import {
  CommentWritetWrapper,
  WriteBox,
  InputBox,
  Button,
  DeleteIcon,
} from './BoardReCommentWrite.styles';

export default function BoardReCommentWriteUI() {
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
