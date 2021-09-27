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
        picture
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

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
