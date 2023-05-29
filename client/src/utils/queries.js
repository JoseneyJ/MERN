import { gql } from "@apollo/client";
export const ME = gql`
  query Me {
    me {
      savedBooks {
        authors
        bookId
        bookTitle
        description
        image
        link
      }
      email
      username
      _id
    }
  }
`;