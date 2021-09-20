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
// import MapView from 'react-native-maps';
import {ScrollView} from 'react-native';

export default function BoardDetailPageUI( props: any) {
  return (
    <>
      <Wrapper>
        <BackImage
          source={require('../../../Assets/Images/AreaListEuropeImg.png')}>
          <TopBox>
          


          <Button onPress={() =>props.navigation.goBack(null)}>
            <Back source={require('../../../Assets/Images/GoToBack_B.png')}></Back>
          </Button>

            <Top>
              <TopLeft>
                <Title>{props.data?.fetchBoard?.title.substr(0, 18)}</Title>
              </TopLeft>

              {/* <TopRight> */}
              {/* -------- 타 이용자 게시글 상세페이지 -------- */}
              {/* <Button> */}
              {/* <Scrap source={require('../../../Assets/Images/IconScrap_Y.png')}></Scrap> */}
              {/* </Button> */}
              {/* '../../../Assets/Images/IconNaviScrap.png' */}
              {/* '../../../Assets/Images/IconScrap_Y.png' */}
              {/* </TopRight> */}
            </Top>

            <UserInfo>
              <UserInfoLeft>
                <Button onPress={props.gotoUserPage}>
                  <Avatar
                    source={require('../../../Assets/Images/IconUserPhoto.png')}></Avatar>
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
              
            {/* ------- Contents -------- */}
            <ScrollView>
            <ContentsBox>

              {/* <TravelImage source={require('../../../Assets/Images/DetailPhoto.png')}></TravelImage> */}
              <TravelImage source={props.data?.fetchBoard?.images[0]} />
              
              <TravelContents>{props.data?.fetchBoard?.contents}</TravelContents>

              <TravelMap></TravelMap>

              <Asdf>
                <Left>
                  <City>
                      <LocationIcon source={require('../../../Assets/Images/IconLocation.png')}></LocationIcon>
                        <CityName>
                          {props.data?.fetchBoard?.location?.area || '미등록'}{', '}
                          {props.data?.fetchBoard?.location.country || '미등록'}{', '}
                          {props.data?.fetchBoard?.location.city || '미등록'}
                        </CityName>
                  </City>

                  <Date>
                        <TravelDateIcon source={require('../../../Assets/Images/IconSchedule.png')}></TravelDateIcon>
                        <TravelDate>
                          {props.data?.fetchBoard?.startDate.substr(0, 10)} ~ {props.data?.fetchBoard?.endDate.substr(0, 10)}
                        </TravelDate>
                  </Date>
                </Left>

                <Right>            

                
              <Bar></Bar>

              {/* ----- 댓글 보기 ----- */}

              <Button onPress={props.gotoCommentPage}>
                <Comment>
                  <CommentImage source={require('../../../Assets/Images/IconComment_B.png')}></CommentImage>
                  <Comments>댓글 보기</Comments>
                </Comment>
              </Button>

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
