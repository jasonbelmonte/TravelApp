// BoardComment List Queries

import {gql} from '@apollo/client';

export const FETCH_COMMENTS = gql`
  query fetchComments($boardId: ID!) {
    fetchComments(boardId: $boardId) {
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

export const DELETE_COMMENT = gql`
  mutation deleteComment($boardCommentId: ID!) {
    deleteComment(boardCommentId: $boardCommentId)
  }
`;
