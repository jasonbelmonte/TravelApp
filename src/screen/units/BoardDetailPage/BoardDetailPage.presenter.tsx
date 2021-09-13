import {
  Wrapper,
  BackImage,
  DetailWrapper,
  Back,
  Top,
  TopLeft,
  Title,
  TopRight,
  // Edit,
  // Delete,
  Scrap,
  UserInfo,
  Avatar,
  UserInfoRight,
  Name,
  EnrollmentDate,
  City,
  CityLeft,
  LocationIcon,
  CityName,
  CityRight,
  TravelDate,
  Bar,
  TravelImage,
  TravelContents,
  TravelMap,
} from './BoardDetailPage.styles';
import React from 'react';
// import MapView from 'react-native-maps';
import { ScrollView, View } from 'react-native';

export default function BoardDetailPageUI() {
  return (
    <>
      <Wrapper>
        {/* <BackImage source={require('../../../Assets/Images/SearchEuropeImg.png')} /> */}
        <BackImage>

          <DetailWrapper>
          <ScrollView>
            <Back source={require('../../../Assets/Images/GoToBack_B.png')}></Back>
            <Top>
              <TopLeft>
                <Title>여행 동행 구합니다.</Title>
              </TopLeft>

              <TopRight>
                {/* -------- 글쓴이 게시글 상세페이지 -------- */}
                {/* <Edit source={require('../../../Assets/Images/IconEdit.png')}></Edit>
                <Delete source={require('../../../Assets/Images/IconDelete.png')}></Delete> */}
                
                {/* -------- 타 이용자 게시글 상세페이지 -------- */}
                <Scrap source={require('../../../Assets/Images/IconScrap_Y.png')}></Scrap>
                {/* '../../../Assets/Images/IconNaviScrap.png' */}
              </TopRight>
            </Top>

            <UserInfo>
              <Avatar source={require('../../../Assets/Images/IconUserPhoto.png')}></Avatar>

              <UserInfoRight>
                <Name>원두팀</Name>
                <EnrollmentDate>2021. 08. 31</EnrollmentDate>
              </UserInfoRight>
            </UserInfo>

              <City>
                <CityLeft>
                  <LocationIcon source={require('../../../Assets/Images/IconLocation.png')}></LocationIcon>
                  <CityName>유럽, Spain, Barcelona</CityName>
                </CityLeft>

                <CityRight>
                  <TravelDate>2021. 08. 31 ~ 2021. 09. 02</TravelDate>
                </CityRight>
              </City>
              <Bar></Bar>

              <TravelImage source={require('../../../Assets/Images/DetailPhoto.png')}></TravelImage>
                <TravelContents>
                내일이나 모레 오후에 바르셀로나 근교 몬세라트에 가려고 하는데 몬세라트까지 기차로 1시간정도 소요된다고 하는데 제가 혼자라서 몬세라트 가실 분 있으면 같이 갔으면 해요.
                {"\n"}
                제 숙소는 람블라스 거리 중심쪽, 까사바트요 근처예요.
                </TravelContents>

              <TravelMap></TravelMap>

          </ScrollView>
          </DetailWrapper>
        </BackImage>
      </Wrapper>

    </>
  )
}
