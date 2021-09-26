import styled from '@emotion/native';
export const Body = styled.View`
  height: 100%;
`;
export const Title = styled.TextInput``;
export const Contents = styled.Text``;
export const Button = styled.TouchableOpacity``;

export const CommentPageHeader = styled.View`
  width: 100%;
  height: 60px;
  border-bottom-color: #dbdbdb;
  border-bottom-width: 0.7px;
  flex-direction: row;
  justify-content: flex-start;
`;
export const GoToBackBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const GoToBack = styled.Image`
  width: 12px;
  height: 15px;
  margin-left: 20px;
`;
export const TitleBox = styled.View`
  width: 100%;
`;
export const CommentTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 60px;
  padding-right: 45px;
`;

export const BoardCommentWrapper = styled.View`
  width: 100%;
  padding: 0px 20px;
`;

// !------------ BoardCommentList.presenterItem --------------
export const CommentBox = styled.View`
  width: 100%;
  border-bottom-width: 0.7px;
  border-bottom-color: #dbdbdb;
  margin-top: 16px;
  padding-bottom: 16px;
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
  /* background-color: lightblue; */
`;

export const WriterPhoto = styled.Image`
  width: 37px;
  height: 37px;
  border-radius: 74px;
`;
export const WriterName = styled.Text`
  font-size: 16px;
  line-height: 37px;
  font-weight: 700;
  margin-left: 10px;
`;
export const ButtonBox = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
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
  line-height: 24px;
  margin-left: 3px;
`;
export const CreatingDate = styled.Text`
  font-size: 12px;
  line-height: 18px;
  color: #a5a5a5;
  margin-left: 3px;
`;
