import {
  Button,
  Wrapper,
  AreaListHeader,
  AreaListTop,
  AreaTitleBox,
  AreaBoxLeft,
  AreaBoxRight,
  GoToBack,
  AreaTextBox,
  SearchIcon,
  CommentAlarm,
  IconImg,
  SubTitleBox,
  AreaListWrap,
} from './AreaPage.styles';
import React from 'react';
import BoardCard from '../../commons/BoardCard/BoardCard.contatiner';
export default function AreaPageUI(props: any) {
  return (
    <Wrapper>
      {/* //! ===== TopHeader Start ===== */}
      <AreaListHeader
        source={require('../../../Assets/Images/AreaListEuropeImg.png')}
        resizeMode="cover">
        <AreaListTop>
          <AreaTitleBox>
            <AreaBoxLeft>
              <Button onPress={() => props.navigation.goBack(null)}>
                <GoToBack
                  source={require('../../../Assets/Images/GoToBack_W.png')}
                />
              </Button>
              <AreaTextBox>Europe</AreaTextBox>
            </AreaBoxLeft>
            <AreaBoxRight>
              <Button onPress={props.goToSearch}>
                <SearchIcon
                  source={require('../../../Assets/Images/IconSearch.png')}
                />
              </Button>
              <Button onPress={props.goToCommetAlarm}>
                <CommentAlarm
                  source={require('../../../Assets/Images/IconAlarm_W.png')}
                />
              </Button>
            </AreaBoxRight>
          </AreaTitleBox>

          <SubTitleBox>
            <IconImg
              source={require('../../../Assets/Images/IconAirplane.png')}
            />
          </SubTitleBox>
        </AreaListTop>
      </AreaListHeader>

      {/* //! ===== Contents Start ===== */}
      <AreaListWrap>
        <BoardCard navigation={props.navigation} />
      </AreaListWrap>
    </Wrapper>
  );
}
