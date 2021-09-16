import { useQuery } from '@apollo/client';
import React from 'react';
import UserPageUI from './UserPage.presenter';
import {Wrapper, Head, Body, Contents} from './UserPage.styles';
import { FETCH_BOARDS_USER_WROTE, FETCH_USER_LOGGED_IN } from './UserPage.queries';

// import MapView from 'react-native-maps';

export default function UserPage() {
  const {data} = useQuery(FETCH_BOARDS_USER_WROTE, {
    variables : {
      userId : "613dccca7c87fd0029d25b73"
      
    }
  })
  const {data: user} = useQuery(FETCH_USER_LOGGED_IN)
  
  console.log(data)
  
  
  
  return (
    
    
    
    
      
      <UserPageUI  data = {data}  user={user}/>
    
    
  ) 
}
