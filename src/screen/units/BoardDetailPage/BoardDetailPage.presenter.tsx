import {
  Wrapper,
  BackImage,
  TopBox,
  Button,
  Back,
  Top,
  TopLeft,
  Title,
  TopRight,
  Scrap,
  UserInfo,
  Avatar,
  UserInfoLeft,
  UserInfoRight,
  Name,
  EnrollmentDate,
  ContentsBox,
  TravelMap,
  Asdf,
  Left,
  City,
  LocationIcon,
  CityName,
  Date,
  TravelDateIcon,
  TravelDate,
  TravelImage,
  TravelContents,
  Right,
  Edit,
  Delete,
  Bar,
  Comment,
  CommentImage,
  Comments,
} from './BoardDetailPage.styles';
import React from 'react';

import {ScrollView} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import ScrapMark from '../../commons/ScrapMark/ScrapMark.container';

export default function BoardDetailPageUI(props: any) {
  return (
    <>
      <Wrapper>
        <BackImage
          source={require('../../../Assets/Images/AreaListEuropeImg.png')}>
          <TopBox>
            <Button onPress={() => props.navigation.goBack(null)}>
              <Back
                source={require('../../../Assets/Images/GoToBack_B.png')}></Back>
            </Button>

            <Top>
              <TopLeft>
                <Title>{props.data?.fetchBoard?.title.substr(0, 18)}</Title>
              </TopLeft>

              <TopRight>
                {/* -------- 타 이용자 게시글 상세페이지 -------- */}
                <Button>
                  <ScrapMark _id={props.data?.fetchBoard?._id} />
                </Button>
                {/* '../../../Assets/Images/IconScrap_G.png' */}
                {/* '../../../Assets/Images/IconScrap_Y.png' */}
              </TopRight>
            </Top>

            <UserInfo>
              <UserInfoLeft>
                <Button onPress={props.gotoUserPage}>
                  <Avatar
                    source={
                      {
                        uri: `https://storage.googleapis.com/${props.data?.fetchBoard?.writer?.picture}`,
                      } || require('../../../Assets/Images/IconUserPhoto.png')
                    }
                  />
                </Button>
                <Name>{props.data?.fetchBoard?.writer.name}</Name>
              </UserInfoLeft>

              <UserInfoRight>
                <EnrollmentDate>
                  {props.data?.fetchBoard?.createdAt.substr(0, 10)}
                </EnrollmentDate>
              </UserInfoRight>
            </UserInfo>
          </TopBox>
        </BackImage>

        {/* ------- Contents ------- */}
        <ScrollView>
          <ContentsBox>
            {props.data?.fetchBoard?.images.map(data => (
              <TravelImage
                source={{uri: `https://storage.googleapis.com/${data}`}}
              />
            ))}

            <TravelContents>{props.data?.fetchBoard?.contents}</TravelContents>

            <TravelMap>
              {props.data?.fetchBoard?.location?.lat &&
              props.data?.fetchBoard?.location?.lng ? (
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={{flex: 1}}
                  initialRegion={{
                    latitude: props.data?.fetchBoard?.location?.lat,
                    longitude: props.data?.fetchBoard?.location?.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                  }}>
                  <Marker
                    coordinate={{
                      latitude: props.data?.fetchBoard?.location?.lat || 0,
                      longitude: props.data?.fetchBoard?.location?.lng || 0,
                    }}
                    description="this is a marker example"></Marker>
                </MapView>
              ) : null}
            </TravelMap>

            <Asdf>
              <Left>
                <City>
                  <LocationIcon
                    source={require('../../../Assets/Images/IconLocation.png')}></LocationIcon>
                  <CityName>
                    {props.data?.fetchBoard?.location?.area || '미등록'}
                    {', '}
                    {props.data?.fetchBoard?.location.country || '미등록'}
                    {', '}
                    {props.data?.fetchBoard?.location.city || '미등록'}
                  </CityName>
                </City>

                <Date>
                  <TravelDateIcon
                    source={require('../../../Assets/Images/IconSchedule.png')}></TravelDateIcon>
                  <TravelDate>
                    {props.data?.fetchBoard?.startDate.substr(0, 10)} ~{' '}
                    {props.data?.fetchBoard?.endDate.substr(0, 10)}
                  </TravelDate>
                </Date>
              </Left>

              <Right>
                <Bar></Bar>

                <Button onPress={props.onClickDelete}>
                  <Delete
                    source={require('../../../Assets/Images/IconDelete.png')}></Delete>
                </Button>
              </Right>
            </Asdf>

            <Bar></Bar>

            {/* ----- 댓글 보기 ----- */}

            <Button onPress={props.goToCommentPage(props.data?.fetchBoard._id)}>
              <Comment>
                <CommentImage
                  source={require('../../../Assets/Images/IconComment_B.png')}></CommentImage>
                <Comments>댓글 보기</Comments>
              </Comment>
            </Button>
          </ContentsBox>
        </ScrollView>
      </Wrapper>
    </>
  );
}
