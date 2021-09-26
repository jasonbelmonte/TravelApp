import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import BoardCommentListUI from './BoardCommentList.presenter';
import {FETCH_COMMENTS} from './BoardCommentList.queries';

export default function BoardCommentList({navigation, route}) {
  const {data} = useQuery(FETCH_COMMENTS, {
    variables: {
      boardId: route?.params?.id,
    },
  });
  const [isWriteOpen, setIsWriteOpen] = useState(true);
  console.log('댓글 데이터 : ', data);
  return (
    <BoardCommentListUI
      navigation={navigation}
      data={data}
      boardId={route?.params?.id}
      isWriteOpen={isWriteOpen}
      setIsWriteOpen={setIsWriteOpen}
    />
  );
}
