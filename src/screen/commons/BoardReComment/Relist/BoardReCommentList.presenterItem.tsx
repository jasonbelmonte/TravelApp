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
import React, {useContext, useState} from 'react';
import {
  FETCH_RE_COMMENTS,
  DELETE_RE_COMMENT,
} from './BoardReCommentList.queries';
import BoardReCommentWrite from '../Rewrite/BoardReCommentWrite.container';
import {GlobalContext} from '../../../../../App';
import {useMutation} from '@apollo/client';

export default function ReCommentListItemUI(props: any) {
  console.log('리댓: ', props.data);
  const {userInfo} = useContext(GlobalContext);
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteReCommentMutation] = useMutation(DELETE_RE_COMMENT);

  const onPressIsReplyOpen = () => {
    if (isReplyOpen === false) {
      setIsReplyOpen(true);
    } else {
      setIsReplyOpen(false);
    }
  };
  const onPressIsEdit = () => {
    setIsEdit(true);
  };

  // const onPressIsDelete = (RecommentDeleteId: any) => async () => {
  //     try {
  //       await deleteReCommentMutation({
  //         variables: {
  //           boardReCommentId: RecommentDeleteId
  //         },
  //         refetchQueries:[
  //           {query: FETCH_RE_COMMENTS,
  //           variables:{
  //             boardReCommentId: //refetch어디로 갈거니
  //           }}
  //         ]
  //       });
  //     } catch (error) {
  //       //삭제가 취소되었다.
  //     }
  //   };
  return (
    <>
      {!isEdit && (
        <ReplyWrap key={props.data._id}>
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
                <WriterName>{props.data?.user.name}</WriterName>
              </WriterInfo>

              {/* //! -- Button Box Start -- */}
              <ButtonBox>
                {props.data.user.name !== userInfo.name ? (
                  <Button onPress={onPressIsReplyOpen}>
                    <CommentIcon
                      source={require('../../../../Assets/Images/IconComment_B.png')}
                    />
                  </Button>
                ) : (
                  <>
                    <Button onPress={onPressIsEdit}>
                      <EditIcon
                        source={require('../../../../Assets/Images/IconEdit.png')}
                      />
                    </Button>
                    <Button>
                      <DeleteIcon
                        source={require('../../../../Assets/Images/IconDelete.png')}
                      />
                    </Button>
                  </>
                )}
              </ButtonBox>
            </TopInfoBox>

            <BottomContents>
              <ContentsText>{props.data?.contents}</ContentsText>
              <CreatingDate>{props.data?.createdAt.substr(0, 10)}</CreatingDate>
            </BottomContents>

            {isReplyOpen && <BoardReCommentWrite data={props.data} />}
          </ReCommentBox>
        </ReplyWrap>
      )}

      {isEdit && <BoardReCommentWrite />}
    </>
  );
}
