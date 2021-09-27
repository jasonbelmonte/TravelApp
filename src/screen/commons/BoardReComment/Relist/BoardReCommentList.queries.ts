import {gql} from '@apollo/client';

export const FETCH_RE_COMMENTS = gql`
  query fetchReComments($boardCommentId: ID!) {
    fetchReComments(boardCommentId: $boardCommentId) {
      _id
      contents
      user {
        _id
        email
        name
        picture
      }
      createdAt
    }
  }
`;

export const DELETE_RE_COMMENT = gql`
  mutation deleteReComment($boardReCommentId: ID!) {
    deleteReCommnet(boardReCommentId: $boardReCommentId)
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
