import { useQuery } from '@apollo/client';
import React, {useState} from 'react';
import { FETCH_BOARDS } from '../MainPage/MainPage.queries';
import MapPageUI from './MapPage.presenter';
import { FETCH_BOARD } from './MapPage.queries';

export default function MapPage({route}) {
  const [location, setLocation] = useState({
    latitude: 41.3879,
    longitude: 2.16992 ,
  });



  const {data} = useQuery(FETCH_BOARDS, {
    variables: {
      startDate: '2000-01-01',
      endDate: '2100-01-01',
    } })

    const {data:datas} = useQuery(FETCH_BOARD, {
      variables: {boardId: route.params?.id},
      // variables: { boardId: "props.data.어쩌구저쩌구" },
    });

  console.log("data",data)
  return <MapPageUI location={location}
                    data={data}
                    datas={datas}
  
  />;
}
