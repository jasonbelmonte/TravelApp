import styled from '@emotion/native';
export const Body = styled.View``;
export const Title = styled.TextInput``;
export const Contents = styled.Text``;
export const Button = styled.TouchableOpacity``;

export const BoardReCommentWrapper = styled.View`
  width: 100%;
`;

// !------------ BoardCommentList.presenterItem --------------
export const ReplyWrap = styled.View`
  width: 100%;
  padding-top: 16px;
  flex-direction: row;
`;
export const IconReplyBox = styled.View`
  width: 47px;
  height: 37px;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 10px;
  padding-top: 9.25px;
`;
export const IconReply = styled.Image`
  width: 16px;
  height: 15.5px;
`;
export const ReCommentBox = styled.View`
  width: 87.5%;
`;
export const TopInfoBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const WriterInfo = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 3px;
`;
export const WriterPhoto = styled.Image`
  width: 37px;
  height: 37px;
`;
export const WriterName = styled.Text`
  font-size: 16px;
  line-height: 37px;
  font-weight: 700;
  padding-left: 10px;
`;
export const ButtonBox = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 3px;
`;
export const CommentIcon = styled.Image`
  width: 18px;
  height: 16px;
`;
export const EditIcon = styled.Image`
  width: 18px;
  height: 20px;
`;
export const DeleteIcon = styled.Image`
  width: 17px;
  height: 21px;
  margin-left: 24px;
`;
export const BottomContents = styled.View`
  width: 100%;
  padding-left: 47px;
  padding-right: 15px;
`;
export const ContentsText = styled.Text`
  font-size: 14px;
  margin-left: 3px;
  line-height: 24px;
`;
export const CreatingDate = styled.Text`
  font-size: 12px;
  line-height: 18px;
  margin-left: 3px;
  color: #a5a5a5;
`;
