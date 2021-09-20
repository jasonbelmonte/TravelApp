import React from 'react';
import {
  SearchImgBack,
  SearchBox,
  Button,
  GoToBack,
  SearchContents,
  InputSearch,
} from './Search.styles';

export default function SearchUI() {
  return (
    <SearchImgBack
      source={require('../../../Assets/Images/SearchEuropeImg.png')}
      resizeMode="cover"
      // blurRadius={90}
    >
      <SearchBox>
        <Button>
          <GoToBack source={require('../../../Assets/Images/GoToBack_W.png')} />
        </Button>

        <SearchContents>
          <InputSearch
            placeholder="검색어를 입력해주세요."
            placeholderTextColor="#999"
          />
        </SearchContents>
      </SearchBox>
    </SearchImgBack>
  );
}
