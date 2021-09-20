import {
  CommentBox,
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
} from './BoardCommentList.styles';
import BoardReCommentList from '../../BoardReComment/Relist/BoardReCommentList.container';
import BoardCommentWrite from '../write/BoardCommentWrite.container';
import {FETCH_COMMENTS, DELETE_COMMENT} from './BoardCommentList.queries';
import React, {useContext, useState} from 'react';
import {GlobalContext} from '../../../../../App';
import {useMutation} from '@apollo/client';
import BoardReCommentWrite from '../../BoardReComment/Rewrite/BoardReCommentWrite.container';

export default function CommentListItemUI(props: any) {
  const {userInfo} = useContext(GlobalContext);
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT);

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

  // const onPressIsDelete = (commentDeleteId: any) => async () => {
  //   try {
  //     await deleteCommentMutation({
  //       variables: {
  //         boardCommentId: commentDeleteId
  //       },
  //       refetchQueries:[
  //         {query: FETCH_COMMENTS,
  //         variables:{
  //           boardCommentId: //refetch어디로 갈거니
  //         }}
  //       ]
  //     });
  //   } catch (error) {
  //     //삭제가 취소되었다.
  //   }
  // };

  return (
    <>
      {!isEdit && (
        <CommentBox key={props.data._id}>
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
            {/* //! -- Button Box End -- */}
          </TopInfoBox>

          <BottomContents>
            <ContentsText>{props.data?.contents}</ContentsText>
            <CreatingDate>{props.data?.createdAt.substr(0, 10)}</CreatingDate>
          </BottomContents>

          <BoardReCommentList data={props.data} />
          {isReplyOpen && <BoardReCommentWrite data={props.data} />}
        </CommentBox>
      )}

      {isEdit && <BoardCommentWrite />}
    </>
  );
}
