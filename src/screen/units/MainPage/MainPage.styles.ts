import styled from '@emotion/native';

export const Container = styled.View`
  /* flex: 1; */
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Head = styled.View`
  width: 100%;
  background-color: white;
  padding-left: 20px;

  padding-right: 20px;
  margin-top: 20px;
  /* padding-top: 20px; */
  /* background-color: rgba(255, 255, 255, 0.1); */
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-between; */
  /* padding: 20px; */

  /* background-color: beige; */
`;
export const HeaderBar = styled.View`
  width: 100%;
  height: 40px;
  padding-top: 16px;
  /* background-color: red; */
`;
export const ClickText = styled.Text`
  text-align: left;
  font-size: 16px;
  color: white;
  padding-left: 25px;
  padding-top: 17px;
  font-weight: 700;
`;
export const CountryImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  /* border-radius: 50px; */
`;
export const Button = styled.TouchableOpacity`
  /* flex: 1; */
  width: 126px;
  height: 170px;
  margin-right: 10px;
`;

export const Colum = styled.Text`
  font-size: 18px;
`;

export const WriteBtn = styled.TouchableOpacity`
  position: absolute;
  width: 55px;
  height: 55px;
  align-items: center;
  justify-content: center;
  right: 28px;
  bottom: 80px;
  border-radius: 30px;
`;

// ------------
export const Body = styled.View`
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: white;
  width: 100%;
  height: 100%;
  /* margin-top: 220px; */
  /* flex: 1; */
  /* padding-bottom: 50px; */
  /* margin-bottom: 200px; */
  /* flex-direction: column; */
  /* justify-content: center; */
  padding-top: 19px;
  /* z-Index: 1000; */
`;

export const List = styled.View`
  width: 100%;
  padding: 1px 10px;
  /* border:1px red; */
`;

export const Card = styled.TouchableOpacity`
  width: 95%;
  height: 130px;
  border-radius: 10px;
  padding: 20px;
  elevation: 3;
  background-color: #fff;
  /* flex: 1; */
  flex-direction: row;
  margin: 1px 11px 20px 11px;
`;
export const CardLeft = styled.View`
  width: 89.5%;
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
`;

export const WriterName = styled.Text`
  font-size: 12px;
  line-height: 26px;
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
export const Button_2 = styled.TouchableOpacity``;
