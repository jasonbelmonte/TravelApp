import {
  Wrapper,
  BackImage,
  Detail__Wrapper,
  Back,
  Top,
  Top__Left,
  Title,
  Top__Right,
  Edit,
  Delete,
  User__Info,
  Avatar,
  User__Info__Right,
  Name,
  Date
} from './BoardDetailPage.styles';
import React from 'react';
// import MapView from 'react-native-maps';

export default function BoardDetailPageUI() {
  return (
    <>
      <Wrapper>
        <BackImage>
          <Detail__Wrapper>
            <Back></Back>
            <Top>
              <Top__Left>
                <Title>여행 동행 구합니다.</Title>
              </Top__Left>

              <Top__Right>
                <Edit></Edit>
                <Delete></Delete>
              </Top__Right>
            </Top>

            <User__Info>
              <Avatar></Avatar>

              <User__Info__Right>
                <Name>호두자두</Name>
                <Date>2021. 08. 31</Date>
              </User__Info__Right>
            </User__Info>

          </Detail__Wrapper>
        </BackImage>
      </Wrapper>
    </>
  );
}