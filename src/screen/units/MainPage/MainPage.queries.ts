import {gql} from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards($endDate: DateTime!, $startDate: DateTime!, $page:Int) {
    fetchBoards(endDate: $endDate, startDate: $startDate ,page:$page) {
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

