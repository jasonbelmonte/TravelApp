import {useMutation} from '@apollo/client';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import {
  CREATE_COMMENT,
  UPDATE_COMMENT,
  FETCH_COMMENTS,
} from './BoardCommentWrite.queries';

export default function BoardCommentWrite(props: any, {route}) {
  const [createCommentMutation] = useMutation(CREATE_COMMENT);
  const [updateCommentMutation] = useMutation(UPDATE_COMMENT);
  const [inputComment, setInputComment] = useState('');
  const [active, setAcitve] = useState(false);

  const onChangeInput = text => {
    if (text.trim().length === 0) {
      setAcitve(false);
    } else {
      setAcitve(true);
      setInputComment(text);
    }
  };
  console.log('aa', inputComment);
  async function onPressSubmit() {
    try {
      await createCommentMutation({
        variables: {
          createBoardCommentInput: {
            contents: inputComment,
          },
          boardId: props.boardId,
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
      // setInputComment;
      Alert.alert('댓글이 등록되었습니다.');
    } catch (error) {
      Alert.alert('댓글이 등록되지 않았습니다.', error.message);
    }
  }

  async function onPressEdit() {
    try {
      await updateCommentMutation({
        variables: {
          updateBoardCommentInput: {
            contents: inputComment,
          },
          boardCommentId: props.boardCommentId,
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
      // setInputComment;
      Alert.alert('댓글이 수정되었습니다.');
    } catch (error) {
      Alert.alert('댓글이 수정되지 않았습니다.', error.message);
    }
    props.setIsEdit(false);
  }
  return (
    <BoardCommentWriteUI
      active={active}
      isEdit={props.isEdit}
      boardCommentId={props.boardCommentId}
      inputComment={inputComment}
      onPressSubmit={onPressSubmit}
      onPressEdit={onPressEdit}
      onChangeInput={onChangeInput}
    />
  );
}
