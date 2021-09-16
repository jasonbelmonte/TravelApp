import {
  Wrapper,
  BackImage,
  DetailWrapper,
  Back,
  Top,
  TopLeft,
  Title,
  TopRight,
  Edit,
  Delete,
  // Scrap,
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
import { ScrollView } from 'react-native';

export default function BoardDetailPageUI(props) {
  return (
    <>
      <Wrapper>
        <BackImage source={require('../../../Assets/Images/SearchEuropeImg.png')}>

          <DetailWrapper>

          <ScrollView>

            <Back source={require('../../../Assets/Images/GoToBack_B.png')}></Back>
            <Top>
              <TopLeft>
                <Title>{props.data?.fetchBoard?.title}</Title>
              </TopLeft>

              <TopRight>
                {/* -------- 글쓴이 게시글 상세페이지 -------- */}
                <Edit source={require('../../../Assets/Images/IconEdit.png')}></Edit>
                <Delete source={require('../../../Assets/Images/IconDelete.png')}></Delete>
                
                {/* -------- 타 이용자 게시글 상세페이지 -------- */}
                {/* <Scrap source={require('../../../Assets/Images/IconScrap_Y.png')}></Scrap> */}
                {/* '../../../Assets/Images/IconNaviScrap.png' */}
              </TopRight>
            </Top>

            <UserInfo>
              <Avatar source={require('../../../Assets/Images/IconUserPhoto.png')}></Avatar>

              <UserInfoRight>
                <Name>{props.data?.fetchBoard?.writer.name}</Name>
                <EnrollmentDate>{props.data?.fetchBoard?.createdAt.substr(0, 10)}</EnrollmentDate>
              </UserInfoRight>
            </UserInfo>

              <City>
                <CityLeft>
                  <LocationIcon source={require('../../../Assets/Images/IconLocation.png')}></LocationIcon>
                  <CityName>
                  {props.data?.fetchBoard?.location.area}{', '}
                  {props.data?.fetchBoard?.location.country}{', '}
                  {props.data?.fetchBoard?.location.city}
                  </CityName>
                </CityLeft>

                <CityRight>
                  <TravelDate>{props.data?.fetchBoard?.startDate.substr(0, 10)} ~ {props.data?.fetchBoard?.endDate.substr(0, 10)}</TravelDate>
                </CityRight>
              </City>
              <Bar></Bar>

              <TravelImage source={require('../../../Assets/Images/DetailPhoto.png')}></TravelImage>
                <TravelContents>
                {props.data?.fetchBoard?.contents}
                </TravelContents>

              <TravelMap></TravelMap>

          </ScrollView>
          </DetailWrapper>
        </BackImage>
      </Wrapper>

    </>
  )
}
