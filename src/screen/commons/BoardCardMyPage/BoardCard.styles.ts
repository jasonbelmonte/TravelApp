import styled from '@emotion/native';
export const Button = styled.TouchableOpacity``;
export const Title = styled.TextInput``;
export const CardWrapper = styled.View`
  width: 100%;
  /* padding: 0px 10px; */
  flex: 1;
`;
export const CardWrap = styled.View``;
export const Card = styled.View`
  width: 95%;
  height: 130px;
  border-radius: 10px;
  padding: 20px;
  elevation: 3;
  background-color: #fff;
  flex: 1;
  flex-direction: row;
  margin: 1px 11px 20px 11px;
`;
export const CardLeft = styled.TouchableOpacity`
  width: 100%;
`;

export const CardTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  line-height: 18px;
  padding-bottom: 5px;
`;
export const CardMiddle = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom-width: 0.7px;
  border-bottom-color: #d8d8d8;
  padding-bottom: 20px;
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
  font-size: 12px;
  line-height: 16px;
  padding-bottom: 3px;
  color: #a5a5a5;
`;
export const CardWriter = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  padding-top: 8px;
`;
export const WriterPhoto = styled.View`
  width: 26px;
  height: 26px;
`;
export const ImageBox = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 50px;
`;

export const WriterName = styled.Text`
  font-size: 12px;
  line-height: 26px;
  padding-left: 6px;
`;

export const MoreText = styled.Text`
  font-size: 20px;
`;
