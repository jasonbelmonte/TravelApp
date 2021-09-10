import styled from '@emotion/native';

export const Wrapper = styled.View`
  width: 330px;
  height: 464px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const Head = styled.View`
  width: 100%;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #d8d8d8;
  padding:20px 20px 0px 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackIcon = styled.Image`
  width: 6px;
  height: 10px;
`;
export const Body = styled.View`
  width: 100%;
  height: 502px;
  justify-content: space-between;
`;


export const Contents = styled.Text`
  font-size: 25px;
`;
export const Colum = styled.Text`
  font-size: 13px;
  font-weight: 700;
`;
export const Colum2 = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color:#BDBDBD ;
`;


export const Title = styled.TextInput`

::placeholder{
  font-size: 17px;
}
`;
export const Button = styled.TouchableOpacity``;
export const DatePick = styled.TouchableOpacity`
 width: 330px;
 height: 39px;
 border: 1px #F5F5F5;
 background-color: #F5F5F5;
 border-radius: 5px;
 margin-bottom: 6px;

`;
export const BodyBox = styled.View`
  width: 100%;
  height: 502px;
  flex-direction: row;
  justify-content: space-between;
`;


export const WorldPick = styled.TouchableOpacity`
 width: 162px;
 height: 39px;
 border: 1px #F5F5F5;
 background-color: #F5F5F5;
 border-radius: 5px;


`;
export const LocPick = styled.TouchableOpacity`
 width: 162px;
 height: 39px;
 border: 1px #F5F5F5;
 background-color: #F5F5F5;
 border-radius: 5px;
 margin-left: 6px;
 
`;
export const Colum3 = styled.Text`
  font-size: 12px;
  color:#A5A5A5;
  line-height: 39px;
  padding-left: 14px;
`;