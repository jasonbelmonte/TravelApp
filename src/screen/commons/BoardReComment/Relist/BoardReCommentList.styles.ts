import styled from '@emotion/native';
export const Body = styled.View``;
export const Title = styled.TextInput``;
export const Contents = styled.Text``;
export const Button = styled.TouchableOpacity``;

export const BoardReCommentWrapper = styled.View`
  width: 100%;
`;
export const ReCommentList = styled.View`
  width: 100%;
  padding-top: 4px;
`;

// !------------ BoardCommentList.presenterItem --------------
export const ReplyWrap = styled.View`
  width: 100%;
  padding-top: 15px;
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
  width: 17px;
  height: 16.5px;
`;
export const ReCommentBox = styled.View`
  width: 87.5%;
`;
export const TopInfoBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
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
  font-weight: 600;
  padding-left: 10px;
`;
export const ButtonBox = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 3px;
`;
export const CommentIcon = styled.Image`
  width: 21px;
  height: 19px;
`;
export const EditIcon = styled.Image`
  width: 20px;
  height: 22px;
`;
export const DeleteIcon = styled.Image`
  width: 18px;
  height: 22px;
  margin-left: 20px;
`;
export const BottomContents = styled.View`
  width: 100%;
  padding-left: 47px;
  padding-right: 15px;
`;
export const ContentsText = styled.Text`
  font-size: 15px;
  line-height: 23px;
`;
export const CreatingDate = styled.Text`
  font-size: 13px;
  line-height: 28px;
  color: #a5a5a5;
`;
