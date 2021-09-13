import React from 'react';
import {
  Button,
  Card,
  CardLeft,
  CardRight,
  ScrapButton,
  CardTitle,
  CardMiddle,
  CardMiddleLeft,
  LocationImg,
  CardMiddleText,
  CardContents,
  CardWriter,
  WriterPhoto,
  WriterName,
  ImageBox,
} from './BoardCard.styles';

export default function BoardCardUI() {
  return (
    <Card>
      <CardLeft>
        <CardTitle>가우디 투어 하실 분 구해요</CardTitle>
        <CardMiddle>
          <CardMiddleLeft>
            <LocationImg
              source={require('../../../Assets/Images/IconLocation.png')}
            />

            <CardMiddleText>Spain, Barcelona</CardMiddleText>
          </CardMiddleLeft>
          <CardMiddleText>2021.09.02 ~ 2021.09.05</CardMiddleText>
        </CardMiddle>
        <CardContents>
          {/* 글 줄임 연산자 {data.substr(0, 18) + '...'} */}
          본문 글본문 글본문 글본문 글본문 글본문 글본문
        </CardContents>
        <CardWriter>
          <WriterPhoto>
            <ImageBox
              source={require('../../../Assets/Images/IconUserPhoto.png')}
            />
          </WriterPhoto>
          <WriterName>호두자두</WriterName>
        </CardWriter>
      </CardLeft>
      <CardRight>
        <Button>
          <ScrapButton
            source={require('../../../Assets/Images/IconScrap_G.png')}
            resizeMode="cover"
          />
        </Button>
      </CardRight>
    </Card>
  );
}
