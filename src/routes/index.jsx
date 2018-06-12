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

      console.log(data.allUsers[0].email);

      //Replace with map later
      let emails = [];
      let names = [];
      for(let i = 0; i < data.allUsers.length; i++){
        names.push(<li>{data.allUsers[i].name}</li>);
        emails.push(<li> {data.allUsers[i].email} </li>);
      }
      

      return <ul> {emails} </ul>
      // return <p> </p>
    }}
  </Query>
);

export default Users;