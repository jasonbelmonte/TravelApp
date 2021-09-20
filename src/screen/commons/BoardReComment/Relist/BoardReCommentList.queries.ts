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
      }
      createdAt
    }
  }
`;

export const DELETE_RE_COMMENT = gql`
  mutation deleteReComment($boardReCommentId: ID!) {
    deleteReComment(boardReCommentId: $boardReCommentId)
  }
`;
