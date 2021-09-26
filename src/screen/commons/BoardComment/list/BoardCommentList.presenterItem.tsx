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
import {
  FETCH_COMMENTS,
  DELETE_COMMENT,
  FETCH_USER_LOGGED_IN,
} from './BoardCommentList.queries';
import React, {useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';

import {Alert} from 'react-native';

export default function CommentListItemUI(props: any) {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT);
  const {data: userInfo} = useQuery(FETCH_USER_LOGGED_IN);

  console.log(userInfo?.fetchUserLoggedIn._id);
  console.log('데이터 :', props.data._id);

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

  const onPressIsDelete = (commentDeleteId: any) => async () => {
    try {
      await deleteCommentMutation({
        variables: {
          boardCommentId: commentDeleteId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId: props.boardId,
            },
          },
        ],
      });
      Alert.alert('댓글이 삭제되었습니다.');
    } catch (error) {
      Alert.alert('댓글이 삭제되지 않았습니다.', error.message);
    }
  };
  const gotoUserPage = () => {
    props.navigation.navigate('UserPage', {id: props.data?.user?._id});
  };

  return (
    <>
      {!isEdit && (
        <CommentBox key={props.data._id}>
          <TopInfoBox>
            <WriterInfo onPress={gotoUserPage}>
              <WriterPhoto
                source={
                  props?.data?.user?.picture
                    ? {
                        uri: `https://storage.googleapis.com/${props.data?.user?.picture}`,
                      }
                    : require('../../../../Assets/Images/IconUserPhoto.png')
                }
              />
              <WriterName>{props.data?.user.name}</WriterName>
            </WriterInfo>

            <ButtonBox>
              {props.data.user._id !== userInfo?.fetchUserLoggedIn._id ? (
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
                  <Button onPress={onPressIsDelete(props.data._id)}>
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

          <BoardReCommentList
            boardCommentId={props.data._id}
            isReplyOpen={isReplyOpen}
            setIsReplyOpen={setIsReplyOpen}
          />
        </CommentBox>
      )}

      {isEdit && (
        <BoardCommentWrite
          boardCommentId={props.data._id}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
}
