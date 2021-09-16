import React from 'react';
import {
  ReplyWrap,
  IconReplyBox,
  IconReply,
  ReCommentBox,
  TopInfoBox,
  WriterInfo,
  WriterPhoto,
  WriterName,
  ButtonBox,
  Button,
  CommentIcon,
  EditIcon,
  DeleteIcon,
  BottomContents,
  ContentsText,
  CreatingDate,
} from './BoardReCommentList.styles';

export default function ReCommentListItemUI() {
  function onClick() {
    console.log('hodu');
  }

  return (
    <ReplyWrap>
      <IconReplyBox>
        <IconReply
          source={require('../../../../Assets/Images/IconReply.png')}
        />
      </IconReplyBox>
      <ReCommentBox>
        <TopInfoBox>
          <WriterInfo>
            <WriterPhoto
              source={require('../../../../Assets/Images/IconUserPhoto.png')}
            />
            <WriterName>찐빵이</WriterName>
          </WriterInfo>
          <ButtonBox>
            <Button>
              <CommentIcon
                source={require('../../../../Assets/Images/IconComment_B.png')}
              />
            </Button>
            {/* <Button>
              <EditIcon
                source={require('../../../../Assets/Images/IconEdit.png')}
              />
            </Button>
            <Button>
              <DeleteIcon
                source={require('../../../../Assets/Images/IconDelete.png')}
              />
            </Button> */}
          </ButtonBox>
        </TopInfoBox>

        <BottomContents>
          <ContentsText>
            댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.
          </ContentsText>
          <CreatingDate>2021.08.31</CreatingDate>
        </BottomContents>
      </ReCommentBox>
    </ReplyWrap>
  );
}
