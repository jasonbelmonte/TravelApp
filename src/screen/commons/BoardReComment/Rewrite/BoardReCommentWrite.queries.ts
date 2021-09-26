import {gql} from '@apollo/client';

//!--- 댓글 등록하기 ---
export const CREATE_RE_COMMENT = gql`
  mutation createReComment(
    $createBoardReCommentInput: CreateBoardReCommentInput!
    $boardCommentId: ID!
  ) {
    createReComment(
      createBoardReCommentInput: $createBoardReCommentInput
      boardCommentId: $boardCommentId
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

export const UPDATE_RE_COMMENT = gql`
  mutation updateReComment(
    $updateBoardReCommentInput: UpdateBoardReCommentInput!
    $boardReCommentId: ID!
  ) {
    updateReComment(
      updateBoardReCommentInput: $updateBoardReCommentInput
      boardReCommentId: $boardReCommentId
    ) {
      _id
      contents
      user {
        _id
        email
        name
        picture
      }
    }
  }
`;
// !--- 리댓글 목록 불러오기 ---
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
