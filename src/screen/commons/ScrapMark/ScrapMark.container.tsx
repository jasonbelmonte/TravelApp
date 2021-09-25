import ScrapMarkUI from './ScrapMark.presenter';
import {useQuery, useMutation} from '@apollo/client';
import {useState, useEffect, useContext} from 'react';
import {FETCH_BOARDS_I_SCRAPPED, SCRAP_BOARD} from './ScrapMark.queries';
import React from 'react';
import {GlobalContext} from '../../../../App';

export default function ScrapMark(props) {
  const [isScrapped, setIsScrapped] = useState(false);
  const [scrapboard] = useMutation(SCRAP_BOARD);
  const {data: boardsScrapped, loading} = useQuery(FETCH_BOARDS_I_SCRAPPED);

  useEffect(() => {
    for (let i = 0; i < boardsScrapped?.fetchBoardsIScrapped.length; i++) {
      if (boardsScrapped?.fetchBoardsIScrapped[i]._id === props._id) {
        setIsScrapped(true);
      }
    }
  }, [loading]);

  const scrap = async () => {
    await scrapboard({
      variables: {boardId: props._id},
    });

    if (isScrapped) setIsScrapped(false);
    if (!isScrapped) setIsScrapped(true);
  };

  return <ScrapMarkUI isScrapped={isScrapped} scrap={scrap} />;
}
