import styled from '@emotion/native';

export const Wrapper = styled.View`
  width: 100%;
  /* height: 2000px; */
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;
export const Head = styled.View`
  width: 321px;
  height: 18px;
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const HeadLeft = styled.View`
  width: 60px;
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
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

export const HeadText = styled.Text`
  font-size : 13px;
  font-weight : 700;
`;


export const Body = styled.View`
  width: 281px;

  /* background-color: yellow; */
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
`

export const BodyUserText = styled.Text`
  font-size : 15px;
  font-weight : 700;
`
export const BodyCountryText = styled.Text`
  font-size : 14px;
  font-weight : 400;
`
export const BodyCityText = styled.Text`
  font-size : 14px;
  font-weight : 400;
`
export const BodyDateText = styled.Text`
  font-size : 10px;
  font-weight : 400;
  color : #BDBDBD;
`
export const BodyContentsText = styled.Text`
  font-size : 14px;
  font-weight : 400;
`


export const BoardHead = styled.View`
  width: 330px;
  /* height : 31px; */
  margin-top: 78px;
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom : 10px;
`;

export const BoardHeadLine = styled.View`
  width : 330px;
  height : 0px;
  margin-bottom : 9.5px;
  border : 0.5px solid black;
`


export const BoardHeadText= styled.Text`
  font-size : 18px;
  font-weight : 400;
`;




  


export const Button = styled.TouchableOpacity``;

export const BoardBody = styled.View`
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: purple;
  width: 320px;
  height: 124px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  margin-top: 9.5px;
  margin-bottom: 9.5px;
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

export const LogOutBtn = styled.TouchableOpacity`
  width : 300px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const LogOutText = styled.Text`
  font-size : 20px;
`