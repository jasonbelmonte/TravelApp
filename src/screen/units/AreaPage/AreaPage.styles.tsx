import styled from '@emotion/native';
export const Button = styled.TouchableOpacity``;
export const Title = styled.TextInput``;

export const Wrapper = styled.View`
  width: 100%;
  position: relative;
  left: 0px;
  top: 0px;
  background-color: #000;
`;

//! ===== TopHeader Start ======================
export const AreaListHeader = styled.ImageBackground`
  width: 100%;
  height: 128px;
  position: absolute;
  top: 0px;
  left: 0px;
`;
export const AreaListTop = styled.View`
  width: 100%;
  padding: 30px 20px;
`;
export const AreaTitleBox = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
export const AreaBoxLeft = styled.View`
  height: 20px;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;
export const AreaBoxRight = styled.View`
  height: 20px;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const GoToBack = styled.Image`
  width: 9px;
  height: 15px;
  margin-right: 14px;
`;
export const AreaTextBox = styled.Text`
  line-height: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;
export const SearchIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
export const CommentAlarm = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 20px;
`;
export const SubTitleBox = styled.View`
  width: 25px;
  border-bottom-width: 0.7px;
  border-bottom-color: #fff;
  padding: 34px 0px 6px 0px;
  margin-left: 23px;
  align-items: center;
`;
export const IconImg = styled.Image`
  width: 23px;
  height: 15px;
`;

//! ===== Contents Start ======================
export const AreaListWrap = styled.View`
  width: 100%;
  /* height: 640px; */
  margin-top: 120px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
  padding-top: 19px;
  padding-bottom: 53px; // 스크롤 최하단 여백
`;
