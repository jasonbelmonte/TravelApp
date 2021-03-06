import React from 'react';
import {useQuery, useMutation} from '@apollo/client';
import BoardDetailPageUI from './BoardDetailPage.presenter';
// import MapView from 'react-native-maps';
import {
  FETCH_BOARD,
  DELETE_BOARD,
  FETCH_USER_LOGGED_IN,
} from './BoardDetailPage.queries';
import RNAndroidKeyboardAdjust from 'rn-android-keyboard-adjust';
export default function BoardDetailPage({navigation, route}) {
  const {data} = useQuery(FETCH_BOARD, {
    variables: {boardId: route.params.id},
    // variables: { boardId: "props.data.어쩌구저쩌구" },
  });
  const {data: user} = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  // console.log(data.fetchBoard._id);
  const gotoUserPage = () => {
    navigation.navigate('UserPage', {id: data?.fetchBoard?.writer?._id});
    console.log(data?.fetchBoard);
  };

  const goToCommentPage = id => () => {
    navigation.navigate('BoardCommentList', {id: id});
    RNAndroidKeyboardAdjust.setAdjustResize();
  };

  async function onClickDelete() {
    try {
      await deleteBoard({variables: {boardId: route?.params?.id}});
      alert('게시물이 삭제되었습니다.');
      navigation.goBack(null);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardDetailPageUI
      data={data}
      user_id={user.fetchUserLoggedIn._id}
      onClickDelete={onClickDelete}
      gotoUserPage={gotoUserPage}
      goToCommentPage={goToCommentPage}
      navigation={navigation}
    />
  );
}
