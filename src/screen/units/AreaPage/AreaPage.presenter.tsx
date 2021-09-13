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
  AreaList,
} from './AreaPage.styles';
import React from 'react';
import BoardCard from '../../commons/BoardCard/BoardCard.contatiner';

export default function AreaPageUI() {
  return (
    <Wrapper>
      {/* //! ===== TopHeader Start ===== */}
      <AreaListHeader
        source={require('../../../Assets/Images/AreaListEuropeImg.png')}
        resizeMode="cover">
        <AreaListTop>
          <AreaTitleBox>
            <AreaBoxLeft>
              <Button>
                <GoToBack
                  source={require('../../../Assets/Images/GoToBack_W.png')}
                />
              </Button>
              <AreaTextBox>Europe</AreaTextBox>
            </AreaBoxLeft>
            <AreaBoxRight>
              <Button>
                <SearchIcon
                  source={require('../../../Assets/Images/IconSearch.png')}
                />
              </Button>
              <Button>
                <CommentAlarm
                  source={require('../../../Assets/Images/IconAlarm_W.png')}
                />
              </Button>
            </AreaBoxRight>
          </AreaTitleBox>

          <SubTitleBox>
            <IconImg
              source={require('../../../Assets/Images/MainAfreecaImg.png')}
            />
          </SubTitleBox>
        </AreaListTop>
      </AreaListHeader>

      {/* //! ===== Contents Start ===== */}
      <AreaListWrap>
        <AreaList>
          <BoardCard />
        </AreaList>
      </AreaListWrap>
    </Wrapper>
  );
}
