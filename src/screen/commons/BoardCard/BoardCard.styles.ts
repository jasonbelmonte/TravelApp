import styled from '@emotion/native';
export const Button = styled.TouchableOpacity``;
export const Title = styled.TextInput``;

export const Card = styled.View`
  width: 100%;
  height: 142px;
  border-radius: 10px;
  padding: 20px;
  elevation: 3;
  background-color: #fff;
  flex: 1;
  flex-direction: row;
`;
export const CardLeft = styled.View`
  width: 88%;
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
`;
export const CardMiddleLeft = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;
export const LocationImg = styled.Image`
  width: 15px;
  height: 15px;
  margin-right: 6px;
`;

export const CardMiddleText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #a5a5a5;
`;
export const CardContents = styled.Text`
  font-size: 14px;
  color: #000;
  line-height: 16px;
  padding-top: 11px;
  padding-bottom: 13px;
`;

export const CardWriter = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
`;
export const WriterPhoto = styled.View`
  width: 26px;
  height: 26px;
`;
export const ImageBox = styled.Image`
  width: 26px;
  height: 26px;
`;

export const WriterName = styled.Text`
  font-size: 12px;
  line-height: 26px;
  padding-left: 6px;
`;

export const CardRight = styled.View`
  width: 12%;
  flex: 1;
  align-items: flex-end;
`;
export const ScrapButton = styled.Image`
  width: 18px;
  height: 30px;
`;
