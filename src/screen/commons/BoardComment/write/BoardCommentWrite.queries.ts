import {gql} from '@apollo/client';

//!--- 댓글 등록하기 ---
export const CREATE_COMMENT = gql`
  mutation createComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
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

// !--- 댓글 목록 불러오기 ---
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
