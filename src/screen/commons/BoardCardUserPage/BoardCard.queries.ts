import {gql} from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards($endDate: DateTime, $startDate: DateTime, $area : String) {
    fetchBoards(endDate: $endDate, startDate: $startDate , area: $area) {
      _id
      title
      contents
      images
      pickedCount
      location {
        _id
        area
        country
        city
        lat
        lng
        createdAt
      }
      writer {
        _id
        email
        name
        picture
      }
      startDate
      endDate
    }
  }
`;
export const FETCH_BOARDS_USER_WROTE = gql`
query fetchboardsuserwrote($userId: ID! ) {
    fetchBoardsUserWrote(userId: $userId) { 
    _id
    title
    contents
    startDate
    endDate
    location{
        area
        country
        city
        lat
        lng
        createdAt
    }
    writer{
      _id
      email
      name
  }
  startDate
  endDate
  }
}
`
export const FETCH_BOARDS_I_WROTE = gql`
query fetchboardsIwrote($page: Int) {
    fetchBoardsIWrote(page: $page) { 
    _id
    title
    contents
    images
      pickedCount
    startDate
    endDate
    location{
        area
        country
        city
        lat
        lng
        createdAt
    }
    writer{
        _id
        email
        name
    }
    startDate
    endDate

  }
}
`

export const SCRAP_BOARD = gql`
    mutation scrapBoard($boardId : ID!){
        scrapBoard(boardId : $boardId)
    }
`
