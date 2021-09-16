import { useQuery } from '@apollo/client';
import React, {useState} from 'react';
import UserPageUI from './UserPage.presenter';
import {Wrapper, Head, Body, Contents} from './UserPage.styles';
import { FETCH_BOARDS_USER_WROTE, FETCH_USER_LOGGED_IN } from './UserPage.queries';

// import MapView from 'react-native-maps';

export default function UserPage() {
  const {data} = useQuery(FETCH_BOARDS_USER_WROTE, {
    variables : {
      userId : "61405d2bbf73a1002a625ce7"
      
    }
  })
  
  const [isShow , setIsShow] = useState(false);
  console.log(data?.fetchBoardsUserWrote[0]?.writer)
  
  const ShowBoards = () => {
    isShow ? setIsShow(false) : setIsShow(true)
  }
  
  return (
    
    
    
    
      
      <UserPageUI  data = {data}  isShow={isShow} ShowBoards = {ShowBoards}/>
    
    
  ) 
}
