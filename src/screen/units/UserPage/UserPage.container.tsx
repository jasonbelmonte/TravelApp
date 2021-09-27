import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import UserPageUI from './UserPage.presenter';
import {Wrapper, Head, Body, Contents} from './UserPage.styles';
import {
  FETCH_BOARDS_USER_WROTE,
  FETCH_USER_LOGGED_IN,
} from './UserPage.queries';

// import MapView from 'react-native-maps';

export default function UserPage({navigation, route}) {
  const {data} = useQuery(FETCH_BOARDS_USER_WROTE, {
    variables: {
      userId: route.params.id,
    },
  });

  const [isShow, setIsShow] = useState(false);
  console.log(data?.fetchBoardsUserWrote[0]?.writer);

  const ShowBoards = () => {
    isShow ? setIsShow(false) : setIsShow(true);
  };

  const gotoBack = () => {
    navigation.goBack();
  };
  return (
    <UserPageUI
      data={data}
      isShow={isShow}
      ShowBoards={ShowBoards}
      navigation={navigation}
      userId={route.params.id}
      gotoBack={gotoBack}
    />
  );
}
