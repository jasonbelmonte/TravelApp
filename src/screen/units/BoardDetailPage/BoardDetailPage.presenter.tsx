import {Wrapper, Head, Body, Contents} from './BoardDetailPage.styles';
import React from 'react';
// import MapView from 'react-native-maps';

export default function BoardDetailPageUI() {
  return (
    <>
      <Head />
      <Wrapper>
        <Body>
          <Contents>Detail page</Contents>
        </Body>
      </Wrapper>
    </>
  );
}
