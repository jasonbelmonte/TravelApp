import {
  AreaListHeader,
  AreaListTop,
  AreaTitle,
  GoToBack,
  AreaTextBox,
  IconImg,
  IconLine,
  Wrapper,
  AreaListBody,
  Contents,
} from './AreaPage.styles';
import React from 'react';

export default function AreaPageUI() {
  return (
    <>
      <AreaListHeader>
        <AreaListTop
          source={require('../../../Assets/Images/AreaListEuropeImg.png')}
          resizeMode="cover">
          <AreaTitle>
            <GoToBack
              source={require('../../../Assets/Images/GoToBack_W.png')}
            />
            <AreaTextBox> Europe</AreaTextBox>
          </AreaTitle>
          <IconLine>
            <IconImg
              source={require('../../../Assets/Images/IconAirplane.png')}
            />
          </IconLine>
        </AreaListTop>
      </AreaListHeader>
      <Wrapper>
        <AreaListBody>
          <Contents>AreaPage</Contents>
        </AreaListBody>
      </Wrapper>
    </>
  );
}
