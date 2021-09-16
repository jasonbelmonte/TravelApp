import {gql} from '@apollo/client'


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

export const FETCH_BOARDS_I_WROTE = gql`
query fetchboardsIwrote{
    fetchBoardsIWrote { 
    _id
    title
    contents
    startDate
    endDate
    location{
        area
        country
        city
    }
    writer{
        name
    }

  }
}
`

export const SCRAP_BOARD = gql`
    mutation scrapBoard($boardId : ID!){
        scrapBoard(boardId : $boardId)
    }
`