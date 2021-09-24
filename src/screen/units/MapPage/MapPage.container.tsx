import { useQuery } from '@apollo/client';
import React, {useState} from 'react';
import { FETCH_BOARDS } from '../MainPage/MainPage.queries';
import MapPageUI from './MapPage.presenter';
import { FETCH_BOARD } from './MapPage.queries';

export default function MapPage({route,navigation}) {
  const [location, setLocation] = useState({
    latitude: 37.44571496460574,
    longitude: 126.9418198429048
    ,
  });



  const {data} = useQuery(FETCH_BOARDS, {
    variables: {
      startDate: '2000-01-01',
      endDate: '2100-01-01',
    } })

    const {data:datas} = useQuery(FETCH_BOARD, {
      variables: {boardId:route?.params?.id }
     
    });

  console.log("data",datas)
  return <MapPageUI location={location}
                    data={data}
                    navigation={navigation}
                    // datas={datas}
  
  />;
}
