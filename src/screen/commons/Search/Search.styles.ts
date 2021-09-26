import styled from '@emotion/native';
export const Button = styled.TouchableOpacity``;

export const SearchImgBack = styled.ImageBackground`
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-bottom:60px;
`;
export const SearchBox = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
   border-bottom-width: 0.7px;
   border-bottom-color: #fff;
`;
export const GoToBack = styled.Image`
  width: 11px;
  height: 18px;
  margin-right: 20px;
`;
export const SearchInput = styled.TextInput`
   width: 91%;
   height: 100%;
  
  padding: 15px;
  padding-left: 10px;
  font-size: 15px;
  line-height: 20px;
  color: #fff;
  ::placeholder {
    line-height: 20px;
    font-size: 15px;
  }
`;
export const SearchIcon = styled.Image`
width: 24px;
height: 24px;
`


// !------------ Search Drop Down -------------
export const SearchDropDown = styled.View`
  width: 100%;
  
`
export const Card = styled.View`
  width: 99%;
  height: 130px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  elevation: 2;
  flex-direction: row;
  margin:8px 0px;
`;
export const CardLeft = styled.TouchableOpacity`
  width: 89.5%;
`;

export const CardTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  line-height: 17px;
  padding-bottom: 5px;
`;
export const CardMiddle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom-width: 0.7px;
  border-bottom-color: #d8d8d8;
  padding-bottom: 1px;
`;
export const CardMiddleContents = styled.View`
  flex: 1;
  justify-content: flex-start;
`;
export const LocationImg = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 6px;
`;
export const CardMiddleText = styled.Text`
  font-size: 13px;
  line-height: 16px;
  padding-bottom: 3px;
  color: #a5a5a5;
`;
export const CardWriter = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-top: 12px;
`;
export const WriterPhoto = styled.View`
  width: 26px;
  height: 26px;
`;
export const ImageBox = styled.Image`
  width: 25px;
  height: 25px;
`;

export const WriterName = styled.Text`
  font-size: 13px;
  line-height: 16px;
  padding-bottom: 3px;
  padding-left: 6px;
`;

export const CardRight = styled.View`
  width: 11.5%;
  flex: 1;
  align-items: flex-end;
`;
export const ScrapButton = styled.Image`
  width: 16px;
  height: 25px;
`;
