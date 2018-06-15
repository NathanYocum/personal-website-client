import gql from "graphql-tag"

const GET_USERS = gql`
  {
    allUsers{
      id
      name
      email
    }

  }
`

export default GET_USERS;