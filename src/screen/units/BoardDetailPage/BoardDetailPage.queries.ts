import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId : $boardId) {
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

// export const DELETE_BOARD = gql`
//   mutation deleteBoard($boardId: ID!) {
//     deleteBoard(boardId: $boardId)
//   }
// `;