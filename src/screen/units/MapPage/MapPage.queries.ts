import {gql} from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards($endDate: DateTime!, $startDate: DateTime!, $page: Int) {
    fetchBoards(endDate: $endDate, startDate: $startDate, page: $page) {
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
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      contents
      images
      pickedCount
      location {
        area
        country
        city
      }
      writer {
        email
        name
        picture
        createdAt
      }
      createdAt
      updatedAt
      deletedAt
      startDate
      endDate
    }
  }
`;
