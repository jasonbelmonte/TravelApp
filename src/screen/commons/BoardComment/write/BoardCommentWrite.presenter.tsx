import React from 'react';
import {
  CommentWritetWrapper,
  WriteBox,
  InputBox,
  Button,
  UploadBtn,
} from './BoardCommentWrite.styles';

export default function BoardCommentWriteUI(props: any) {
  return (
    <CommentWritetWrapper>
      <WriteBox active={props.active}>
        <InputBox
          onChangeText={text => props.onChangeInput(text)}
          placeholder={'최대 100글자까지 입력 가능합니다.'}
          placeholderTextColor="silver"
          maxLength={100}
          multiline={true}
          textAlignVertical={'top'}
        />
        <Button onPress={props.onPressBtn}>
          {props.active ? (
            <UploadBtn
              source={require('../../../../Assets/Images/IconArrowToTop_Y.png')}
            />
          ) : (
            <UploadBtn
              source={require('../../../../Assets/Images/IconArrowToTop_G.png')}
            />
          )}
        </Button>
      </WriteBox>
    </CommentWritetWrapper>
  );
}
