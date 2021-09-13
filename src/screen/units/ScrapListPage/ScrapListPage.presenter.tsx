import {
  Wrapper,
  Top,
  Back,
  TopTitle,
  Bar,
  Scrap,
  ScrapImage,
  Contents,
  Title,
  Location,
  LocationIcon,
  CityName,
  Content,
  ScrapIcon,
  Bar2
} from './ScrapListPage.styles';
import React from 'react';
// import MapView from 'react-native-maps';

export default function ScrapListPageUI() {
  return (
    <>
      <Wrapper>
        <Top>
          <Back source={require('../../../Assets/Images/GoToBack_B.png')}></Back>
          <TopTitle>스크랩</TopTitle>
        </Top>

        <Bar></Bar>

        <Scrap>
          <ScrapImage source={require('../../../Assets/Images/DetailPhoto.png')}></ScrapImage>

            <Contents>
              <Title>여행 동행 구합니다.</Title>
                <Location>
                  <LocationIcon source={require('../../../Assets/Images/IconLocation.png')}></LocationIcon>
                  <CityName>Spain, Barcelona</CityName>
                </Location>
              <Content>내일이나 모레 오후에 바르셀로나 근교 몬세라트에 가려고 해요. 몬세라트까지 1시 ...</Content>
          </Contents>

          <ScrapIcon source={require('../../../Assets/Images/IconScrap_Y.png')}></ScrapIcon>

          
        </Scrap>

        <Bar2></Bar2>

      </Wrapper>
    </>
  );
}