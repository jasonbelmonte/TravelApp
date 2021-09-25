import React from 'react';
import {useQuery, useMutation} from '@apollo/client';
import BoardDetailPageUI from './BoardDetailPage.presenter';
import {FETCH_BOARD, DELETE_BOARD} from './BoardDetailPage.queries';
// import MapView from 'react-native-maps';

export default function BoardDetailPage({navigation, route}) {
  const {data} = useQuery(FETCH_BOARD, {
    variables: {boardId: route.params.id},
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const gotoUserPage = () => {
    navigation.navigate('UserPage', {id: data?.fetchBoard?.writer?._id});
    console.log(data?.fetchBoard);
  };

  const goToCommentPage = id => () => {
    navigation.navigate('BoardCommentList', {id: id});
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
      onClickDelete={onClickDelete}
      gotoUserPage={gotoUserPage}
      goToCommentPage={goToCommentPage}
      navigation={navigation}
    />
  );
}
