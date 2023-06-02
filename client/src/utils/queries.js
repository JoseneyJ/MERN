import { gql } from "@apollo/client";
export const ME = gql`
  query Me {
    me {
      savedBooks {
        authors
        bookId
        title
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