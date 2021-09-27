import {gql} from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $area: String) {
    fetchBoards(page: $page, area: $area) {
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

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
    }
  }
`;
