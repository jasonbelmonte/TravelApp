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
  Button,
  ScrapIcon,
  Bar2
} from './ScrapListPage.styles';
import React from 'react';
// import MapView from 'react-native-maps';

export default function ScrapListPageUI(props) {
  return (
    <>
      <Wrapper>
        <Top>
          <Back source={require('../../../Assets/Images/GoToBack_B.png')}></Back>
          <TopTitle>스크랩</TopTitle>
        </Top>

        <Bar></Bar>

        

        {props.data?.fetchBoardsIScrapped.map((data) => (
          <>
            <Scrap>
              <ScrapImage source={require('../../../Assets/Images/DetailPhoto.png')}></ScrapImage>
                <Contents>
                  <Title>{data.title}</Title>
                    <Location>
                      <LocationIcon source={require('../../../Assets/Images/IconLocation.png')}></LocationIcon>
                      <CityName>{data?.location?.country}, {data?.location?.city}</CityName>
                    </Location>
                <Content>{data?.contents}</Content>
                                                                  {/* substr(0, 10) */}
                </Contents>

          <Button>
            <ScrapIcon source={require('../../../Assets/Images/IconScrap_Y.png')}></ScrapIcon>
          </Button>
          </Scrap>
          </>
        ))}
            
          
        

        <Bar2></Bar2>

      </Wrapper>
    </>
  );
}