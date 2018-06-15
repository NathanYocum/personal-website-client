import React from "react";
import NavBar from '../NavBar/NavBarComponent';
import {Query} from "react-apollo";

import GET_USERS from '../../queries/GET_USERS';

const Users = () => (
  <div>
    <NavBar />
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
  </div>
);

export default Users;