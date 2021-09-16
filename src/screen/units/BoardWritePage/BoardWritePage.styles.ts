import styled from '@emotion/native';

export const Wrapper = styled.View`
  /* width: 330px; */
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
  width: 9px;
  height: 15px;
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
  font-size: 16px;
  font-weight: 700;

`;


export const Colum2 = styled.Text`
  font-size: 15px;
  color:#BDBDBD ;
  `;
export const Colum3 = styled.Text` 
font-size: 12px;
color:${(props:any)=>(props.startDate ?"black":"#A5A5A5")} ;
margin-left: 4px;

`;
export const Colum3_2 = styled.Text` 
font-size: 12px;
color:${(props:any)=>(props.onLocationSelect ?"black":"#A5A5A5")} ;
margin-left: 4px;

`;
  export const Colum4 = styled.Text`
 color: #FFBE2B;
 font-size: 14px;
  font-weight: 700;
  `;

export const Title = styled.TextInput`

::placeholder{
  font-size: 17px;
}
`;
export const Button = styled.TouchableOpacity``;
export const DatePick = styled.TouchableOpacity`
 height: 39px;
 border: 1px #F5F5F5;
 background-color: #E8E8E8;
 border-radius: 5px;
 margin-bottom: 6px;
flex-direction: row;
align-items: center;
padding-left:14px ;

`;


export const Calendar = styled.View`
  background-Color:#00000099;
  flex:1;
  justify-content: center;
  align-Items:center;
`;

export const ModalView = styled.View`
  background-Color:white;
  elevation: 5;
  flex:1;
  border-Radius: 20px;
  padding: 20px;
  margin: 140px;
`;
export const BodyBox = styled.View`
  width: 100%;
  height: 502px;
  flex-direction: row;
  justify-content: space-between;
`;


export const ButtonClose = styled.TouchableOpacity`
margin-left: 355px;
margin-top: 10px;

`
export const WorldPick = styled.View`
 width: 49.2%;
 height: 39px;
 border: 1px #F5F5F5;
 background-color: #E8E8E8;
 border-radius: 5px;
 flex-direction: row;
align-items: center;

padding-left: 14px;
overflow: hidden;


`;

export const LocPick = styled.TouchableOpacity`
 width: 49.2%;
 height: 39px;
 border: 1px #F5F5F5;
 background-color: #E8E8E8;
 border-radius: 5px;

 flex-direction: row;
align-items: center;
padding-left: 14px;
 
`;


export const IconImg =styled.Image`
width: 15px;
height: 15px;

`