import {gql} from '@apollo/client'


export const FETCH_USER_LOGGED_IN = gql`
query fetchUserLoggedIn{
     fetchUserLoggedIn{
       _id
       email
       name
       picture
       contents
       location{
         area
         country
         city
       }
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

export const UPLOAD_FILE = gql`
  mutation uploadFile($bbb: Upload!) {
    uploadFile(file: $bbb) {
      _id
      url
    }
  }
`;


export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput : UpdateUserInput!){
    updateUser(updateUserInput : $updateUserInput){
      contents
    }
  }
`