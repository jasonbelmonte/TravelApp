import {gql} from '@apollo/client';

export const SCRAP_BOARD = gql`
  mutation scrapboard($boardId: ID!) {
    scrapBoard(boardId: $boardId)
  }
`;

export const FETCH_BOARDS_I_SCRAPPED = gql`
  query fetchboardsIscrapped {
    fetchBoardsIScrapped {
      _id
    }
  }
`;
