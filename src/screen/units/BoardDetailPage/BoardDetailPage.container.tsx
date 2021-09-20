import React from 'react';
import {useQuery, useMutation} from '@apollo/client';
import BoardDetailPageUI from './BoardDetailPage.presenter';
// import MapView from 'react-native-maps';
import {FETCH_BOARD, DELETE_BOARD} from './BoardDetailPage.queries';

export default function BoardDetailPage({navigation,route}) {
  const {data} = useQuery(FETCH_BOARD, {
    variables: {boardId: route.params.id},
    // variables: { boardId: "props.data.어쩌구저쩌구" },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const gotoUserPage = () => {
    navigation.navigate('UserPage');
  }

  const gotoCommentPage = () => {
    navigation.navigate('CommentPage');
  }

  async function onClickDelete() {
    try {
      await deleteBoard({variables: {boardId: route.params.id}});
      alert('게시물이 삭제되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  }

  return <BoardDetailPageUI 
    data={data}
    onClickDelete={onClickDelete} 
    gotoUserPage={gotoUserPage} 
    gotoCommentPage={gotoCommentPage}
    navigation={navigation}
  />;
}
