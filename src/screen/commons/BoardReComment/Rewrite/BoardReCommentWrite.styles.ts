import styled from '@emotion/native';

export const CommentWritetWrapper = styled.View`
  width: 100%;
  height: 72px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;
export const WriteBox = styled.View`
  width: 100%;
  height: 48px;
  border: ${props => (props.active ? '1px #FFBE2B' : '1px #d8d8d8')};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
export const InputBox = styled.TextInput`
  width: 88%;
  padding-left: 19px;
  font-size: 15px;
  color: #000;
`;
export const Button = styled.TouchableOpacity`
  width: 12%;
  justify-content: center;
  align-items: center;
`;
export const UploadBtn = styled.Image`
  width: 15px;
  height: 20.3px;
  margin-right: 10px;
`;
