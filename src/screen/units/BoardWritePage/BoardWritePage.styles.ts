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
  flex:1;  
  justify-content: flex-start;
  
`;



export const Error = styled.Text`
  font-size: 10px;
  /* font-weight: 600; */
  /* line-height: 18px; */
  color:red;

`;
export const Colum = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;

`;


export const Colum2 = styled.Text`
  font-size: 15px;
  color: #FFBE2B;
  line-height: 18px;
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




export const BodyBox = styled.View`
  width: 100%;
  height: 39px;
  flex-direction: row;
  justify-content: space-between;
 
`;



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
padding-right: 14px;
 
`;



export const IconImg =styled.Image`
width: 15px;
height: 15px;

`
export const WriteBox =styled.View`
width: 100%;
height: 70%;
padding-top: 20px;

`
export const Contents = styled.TextInput`
width: 100%;
font-size: 12px;


`;
export const Line =styled.View`
width: 100%;
border-bottom-width: 1px;
border-bottom-color:#D8D8D8 ;

`
// ---------- image picker 
export const ImageBox =styled.View`
flex-direction: row;

margin-top: 8px;
`

export const ImagePicked = styled.TouchableOpacity`
margin-right: 10px;
background-color:  #E8E8E8;
width:60px;
height: 60px;
justify-content: center;
align-items:center;
`
export const Image1 = styled.ImageBackground`
width:60px;
height: 60px;

`