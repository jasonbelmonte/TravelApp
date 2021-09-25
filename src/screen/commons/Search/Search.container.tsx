import {
  SearchImgBack,
  SearchBox,
  Button,
  GoToBack,
  SearchInput,
} from './Search.styles';
import React, {useState } from 'react';
import {gql, useQuery} from '@apollo/client';
import SearchDropDown from './SearchDropDown';

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search:$search) {
      _id
      title
      contents
      location {
        _id
        area
        country
        city
      }
      writer {
        _id
        name
      }
      startDate
      endDate
    }
  }
`;

export default function Search(navigation) {
const {data,refetch} = useQuery(FETCH_BOARDS)
console.log('검색 데이터 : ',data)
const [search, setSearch] = useState('')

const [isSearching, setIsSearching] = useState(false)
const onChangeSearch = (event) => {
  setSearch(event.nativeEvent.text)
  refetch({search:event.nativeEvent.text})
  console.log("text in input : ",event.nativeEvent.text)
  console.log("text in state : ",search)
  
  if(event.nativeEvent.text.length === 0){
    setIsSearching(false)
  } else {
  setIsSearching(true)
  }
}
const goToBoardDetail = id => () => {
  navigation.navigate('BoardDetailPage', {id: id});
};

  return (
    <SearchImgBack
      source={require('../../../Assets/Images/SearchEuropeImg.png')}
      resizeMode="cover"
    >
      <SearchBox>
        <Button 
          onPress={() => navigation.goBack(null)}
        >
          <GoToBack source={require('../../../Assets/Images/GoToBack_W.png')} />
        </Button>

        <SearchInput
          value ={search}
          onChange={onChangeSearch}
          placeholder="검색어를 입력해주세요."
          placeholderTextColor="#cacaca"
          maxLength={40}
          type="text"
          autoCorrect={false}
        />
      </SearchBox>

      {isSearching && 
        <SearchDropDown 
            data={data}
            search={search}
            setSearch={setSearch}
            navigation={navigation}
            goToBoardDetail={goToBoardDetail}
        />
      }
    </SearchImgBack>
  );
}
