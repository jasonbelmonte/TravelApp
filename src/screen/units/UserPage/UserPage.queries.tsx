import {gql} from '@apollo/client'


export const FETCH_BOARDS_USER_WROTE = gql`
query fetchboardsuserwrote($userId: ID! ) {
  fetchBoardsUserWrote(userId: $userId) { 
    _id
    title
    contents
    startDate
    endDate
    
    writer{
      _id
      email
      name
      contents
      location{
        area
        country
        city
      }
      }
    startDate
    endDate
  }
}
`

export const FETCH_USER_LOGGED_IN = gql`
query fetchUserLoggedIn{
     fetchUserLoggedIn{
       _id
       email
       name
       picture
       createdAt
       updatedAt
       deletedAt
     }
   }
`