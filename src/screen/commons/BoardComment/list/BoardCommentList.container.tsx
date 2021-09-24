import React from 'react';
import {useQuery} from '@apollo/client';
import BoardCommentListUI from './BoardCommentList.presenter';
import {FETCH_COMMENTS} from './BoardCommentList.queries';

export default function BoardCommentList({ navigation, route}) {
  const {data} = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: route?.params?.id,
      // boardId: '61471e74da0ecc002ae9864c',
    },
  });
  
  
  console.log('댓글 데이터 : ', data);
  return <BoardCommentListUI navigation={navigation} data={data} boardId={route?.params?.id}/>
}
