import {useMutation} from '@apollo/client';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import BoardReCommentWriteUI from './BoardReCommentWrite.presenter';
import {
  CREATE_RE_COMMENT,
  UPDATE_RE_COMMENT,
  FETCH_RE_COMMENTS,
} from './BoardReCommentWrite.queries';

export default function BoardReCommentWrite(props) {
  const [isEmpty, setIsEmpty] = useState(false);
  const [createReCommentMutation] = useMutation(CREATE_RE_COMMENT);
  const [updateReCommentMutation] = useMutation(UPDATE_RE_COMMENT);
  const [inputReComment, setInputReComment] = useState('');
  const [active, setAcitve] = useState(false);

  const onChangeColor = () => {
    if (isEmpty === false) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const onChangeInput = text => {
    if (text.trim().length === 0) {
      setAcitve(false);
    } else {
      setAcitve(true);
      setInputReComment(text);
    }
  };

  async function onPressSubmitRe() {
    try {
      await createReCommentMutation({
        variables: {
          createBoardReCommentInput: {
            contents: inputReComment,
          },
          boardCommentId: props.boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_RE_COMMENTS,
            variables: {
              boardCommentId: props.boardCommentId,
            },
          },
        ],
      });
      // setInputComment;
      Alert.alert('리댓글이 등록되었습니다.');
    } catch (error) {
      Alert.alert('리댓글이 등록되지 않았습니다.', error.message);
    }
    props.setIsReplyOpen(false);
  }

  async function onPressEditRe() {
    try {
      await updateReCommentMutation({
        variables: {
          updateBoardReCommentInput: {
            contents: inputReComment,
          },
          boardReCommentId: props.boardReCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_RE_COMMENTS,
            variables: {
              boardCommentId: props.boardCommentId,
            },
          },
        ],
      });
      // setInputComment;
      Alert.alert('리댓글이 수정되었습니다.');
    } catch (error) {
      Alert.alert('리댓글이 수정되지 않았습니다.', error.message);
    }
    props.setIsEdit(false);
  }
  return (
    <BoardReCommentWriteUI
      onChangeColor={onChangeColor}
      active={active}
      isEdit={props.isEdit}
      boardReCommentId={props.boardReCommentId}
      inputReComment={inputReComment}
      onPressSubmitRe={onPressSubmitRe}
      onPressEditRe={onPressEditRe}
      onChangeInput={onChangeInput}
    />
  );
}
