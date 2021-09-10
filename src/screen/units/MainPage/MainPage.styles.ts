import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  flex: 1;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Head = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;

  /* background-color: rgba(255, 255, 255, 0.1); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding: 20px; */
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  /* background-color: beige; */
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
  flex: 1;
  width: 126px;
  height: 170px;
  margin-right: 10px;
`;

export const Colum = styled.Text`
  font-size: 18px;
`;
export const Body = styled.View`
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: white;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  margin: 0 auto;
  margin-top: 10px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled.View`
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: white;
  width: 98%;
  height: 124px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  elevation: 2;
`;
export const ProfileImg = styled.Image`
  width: 16px;
  height: 16px;
  border-radius: 70px;
  margin-right: 10px;
`;
export const ProfileInit = styled.View``;
export const ProfileHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ProfileBody = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.View`
  border: 0.5px solid #cdcdcd;
  color: #cdcdcd;
`;
export const ProfileInfo = styled.View`
  flex-direction: row;
`;
export const Name = styled.Text`
  font-size: 9px;
  font-weight: 700;
`;
export const Country = styled.Text`
  font-size: 10px;
  opacity: 0.7;
  margin-left: 7px;
`;
export const Title = styled.Text`
  font-size: 12px;
`;
export const JobTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;
export const WriteBtn = styled.TouchableOpacity`
  position: absolute;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  right: 28px;
  bottom: 20px;
  border-radius: 30px;
`;
