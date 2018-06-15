import React from "react";
import {Query} from "react-apollo";
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

const Users = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error! {error.message}</p>;
      
      let names = data.allUsers.map((obj) => {
        return <li key={obj.name}>{obj.name}</li>;
      });
      let emails = data.allUsers.map((obj) => {
        return <li key={obj.name}>{obj.email}</li>
      });
      

      return <ul> {names} {emails}</ul>
    }}
  </Query>
);

export default Users;