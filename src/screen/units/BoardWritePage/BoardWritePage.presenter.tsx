import {
  Wrapper,
  Button,
  BackIcon,
  Head,
  Colum,
  Colum2,
  Body,
  Contents,
  Title,
  DatePick,
  BodyBox,
  WorldPick,
  LocPick,
  Colum3,

 
} from './BoardWritePage.styles';
import React from 'react';
import CalendarPage from '../../commons/Claender/Claender.presenter';

// import MapView from 'react-native-maps';

export default function BoardWritePageUI(props:any) {
  return (
    <>
       {props.show && (
              <CalendarPage/>
      )}
      <Head>
        <Button>
        <BackIcon source={require('../../../Assets/Images/GoToBack_B.png')} />
        </Button>
       <Colum>동행찾기 글쓰기</Colum>
       <Button><Colum2>등록</Colum2></Button>
      </Head>
     
      <Wrapper>
        <Body>
          <Title placeholder={"제목"}></Title>
          <DatePick onPress={props.showMode} >
            <Colum3>{props.date}</Colum3>
          </DatePick>
       
    <BodyBox>
      <WorldPick><Colum3>대륙 선택</Colum3></WorldPick>
      <LocPick><Colum3></Colum3></LocPick>
      </BodyBox> 
        </Body>
        <Body>
          <Button>
            <Contents></Contents>
          </Button>
        </Body>
      </Wrapper>
    </>
  );
}
