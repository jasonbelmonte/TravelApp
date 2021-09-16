import {Wrapper, Head, Body, Contents} from './UserPage.styles';
import React from 'react';
// import MapView from 'react-native-maps';

export default function UserPageUI(props) {
  return (
    <>
      <Head />
      <Wrapper>
        <Body>
          <Contents>UserPage</Contents>
          <Contents>{props.user?.fetchUserLoggedIn?.email}</Contents>
          <Contents>{props.user?.fetchUserLoggedIn?.name}</Contents>
          
          
          {props.data?.fetchBoardsUserWrote.map((data) =>(
        <Contents key={data._id}>
        <Contents>{data.name}</Contents>
        <Contents>{data.email}</Contents>
        
        </Contents>
      ))}
        
        </Body>
      </Wrapper>
    </>
  );
}
