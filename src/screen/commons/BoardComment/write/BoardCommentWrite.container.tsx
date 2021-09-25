import {useMutation} from '@apollo/client';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import BoardCommentWriteUI from './BoardCommentWrite.presenter';
import {CREATE_COMMENT, FETCH_COMMENTS} from './BoardCommentWrite.queries';

export default function BoardCommentWrite(props: any, {route}) {
  const [createCommentMutaion] = useMutation(CREATE_COMMENT);
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
  async function onPressBtn() {
    try {
      await createCommentMutaion({
        variables: {
          createBoardCommentInput: {
            contents: inputComment,
          },
          boardId: props.boardId
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: {
              boardId:  props.boardId
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

  return (
    <BoardCommentWriteUI
      active={active}
      isEdit={props.isEdit}
      ondata={props.ondata}
      inputComment={inputComment}
      onPressBtn={onPressBtn}
      onChangeInput={onChangeInput}
    />
  );
}
