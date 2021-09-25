import {
  Wrapper,
  Top,
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
  Bar2,
} from './ScrapListPage.styles';
import React from 'react';
// import MapView from 'react-native-maps';
import {ScrollView} from 'react-native';
import ScrapMark from '../../commons/ScrapMark/ScrapMark.container';
export default function ScrapListPageUI(props) {
  return (
    <>
      <Wrapper>
        <Top>
          <TopTitle>스크랩</TopTitle>
        </Top>
        <Bar></Bar>

        <ScrollView>
          {props.data?.fetchBoardsIScrapped.map(data => (
            <>
              <Scrap key={data._id}>
                <ScrapImage
                  source={require('../../../Assets/Images/DetailPhoto.png')}></ScrapImage>

                <Contents>
                  <Button onPress={props.gotoBoardDetailPage(data._id)}>
                    <Title>{data.title}</Title>
                    <Location>
                      <LocationIcon
                        source={require('../../../Assets/Images/IconLocation.png')}></LocationIcon>
                      <CityName>
                        {data?.location?.country || '미등록'},{' '}
                        {data?.location?.city || '미등록'}
                      </CityName>
                    </Location>
                    <Content>{data?.contents.substr(0, 70) + '..'}</Content>
                  </Button>
                </Contents>

                <Button onPress={props.scrap(data._id)}>
                  <ScrapIcon
                    source={require('../../../Assets/Images/IconScrap_Y.png')}></ScrapIcon>
                </Button>
                {/* <ScrapMark _id={data._id} /> */}
              </Scrap>
              <Bar2></Bar2>
            </>
          ))}
        </ScrollView>
        <Button onPress={props.show}>
          <TopTitle>refresh</TopTitle>
        </Button>
      </Wrapper>
    </>
  );
}
