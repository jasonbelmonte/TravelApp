import styled from '@emotion/native';

export const Wrapper = styled.View`
  width: 100%;
  /* height: 2000px; */
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;
export const Head = styled.View`
  width: 321px;
  height: 18px;
  background-color: blue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const HeadLeft = styled.View`
  width: 45px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const HeadMiddle = styled.View`
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const HeadRight = styled.View`
  width: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Body = styled.View`
  width: 281px;

  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserImg = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  margin-bottom: 34px;
`;
export const BodyLocation = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BodyContents = styled.View`
  width: 281px;
  margin-top: 20px;
`;
export const BoardHead = styled.View`
  width: 330px;
  /* height : 31px; */
  margin-top: 78px;
  background-color: green;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const BoardBody = styled.View`
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: purple;
  width: 320px;
  height: 124px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Contents3 = styled.Text`
  font-size: 10px;
`;

export const Contents = styled.Text`
  font-size: 13px;
`;

export const Contents2 = styled.Text`
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity``;

export const List = styled.View`
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: purple;
  width: 320px;
  height: 124px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  margin-top: 20px;
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
