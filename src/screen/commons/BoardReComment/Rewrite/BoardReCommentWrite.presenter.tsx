import React from 'react';
import {
  CommentWritetWrapper,
  WriteBox,
  InputBox,
  Button,
  DeleteIcon,
} from './BoardReCommentWrite.styles';

export default function BoardReCommentWriteUI(props) {
  return (
    <>
      {!props.isEdit && (
        <CommentWritetWrapper>
          <WriteBox>
            <InputBox
              onChangeText={text => props.onChangeInput(text)}
              placeholder={'Add Comment...'}
              placeholderTextColor="silver"
              maxLength={100}
              multiline={true}
              textAlignVertical={'top'}
            />
            <Button onPress={props.onPressSubmitRe}>
              <DeleteIcon
                source={require('../../../../Assets/Images/IconArrowToTop_G.png')}
              />
            </Button>
          </WriteBox>
        </CommentWritetWrapper>
      )}
      {props.isEdit && (
        <CommentWritetWrapper>
          <WriteBox>
            <InputBox
              onChangeText={text => props.onChangeInput(text)}
              placeholder={'Add Comment...'}
              placeholderTextColor="silver"
              maxLength={100}
              multiline={true}
              textAlignVertical={'top'}
            />
            <Button onPress={props.onPressEditRe}>
              <DeleteIcon
                source={require('../../../../Assets/Images/IconArrowToTop_G.png')}
              />
            </Button>
          </WriteBox>
        </CommentWritetWrapper>
      )}
    </>
  );
}
