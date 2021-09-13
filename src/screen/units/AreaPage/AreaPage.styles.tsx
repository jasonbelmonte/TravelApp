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
  /* border: 1px solid red; */
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
  width: 21px;
  border-bottom-width: 0.5px;
  border-bottom-color: #fff;
  padding: 36px 0px 5px 0px;
  margin-left: 28px;
  align-items: center;
`;
export const IconImg = styled.Image`
  width: 17px;
  height: 11px;
`;

//! ===== Contents Start ======================
export const AreaListWrap = styled.View`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  position: absolute;
  left: 0px;
  top: 120px;
  background-color: #fff;
  padding-top: 20px;
`;
export const AreaList = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px 20px 20px;
  background-color: #fff;
`;
