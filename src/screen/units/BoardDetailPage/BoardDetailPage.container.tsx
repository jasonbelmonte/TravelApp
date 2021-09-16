import React from 'react';
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailPageUI from './BoardDetailPage.presenter';
// import MapView from 'react-native-maps';
import {
  FETCH_BOARD,
} from "./BoardDetailPage.queries";

export default function BoardDetailPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "613f1a0b7c87fd0029d25b93" },
    // variables: { boardId: "props.data.어쩌구저쩌구" },
    
  });
  
  return ( 
    <BoardDetailPageUI 
      data={data}
    />
  )
}

