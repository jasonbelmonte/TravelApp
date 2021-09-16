import React from 'react';
import {useQuery, useMutation} from '@apollo/client';
import BoardDetailPageUI from './BoardDetailPage.presenter';
// import MapView from 'react-native-maps';

import {FETCH_BOARD, DELETE_BOARD} from './BoardDetailPage.queries';

export default function BoardDetailPage() {
  const {data} = useQuery(FETCH_BOARD, {
    variables: {boardId: '61406268bf73a1002a625cee'},
    // variables: { boardId: "props.data.어쩌구저쩌구" },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);

  // const submitHandler = useCallback(() => {
  //     if (editedProduct) {
  //       dispatch(productsActions.updateProduct(prodId, title, imageUrl));
  //     }
  //     props.navigation.goBack();
  //   }, [dispatch, prodId, title, imageUrl, price]);

  // useEffect(() => {
  //     props.navigation.setParams({ submit: submitHandler });
  //   }, [submitHandler]);

  async function onClickDelete() {
    try {
      await deleteBoard({variables: {boardId: '61406268bf73a1002a625cee'}});
      alert('게시물이 삭제되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  }

  return <BoardDetailPageUI data={data} onClickDelete={onClickDelete} />;
}
