import React from 'react';
import Users from '../Users/UsersComponent';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-client-preset';

const client = new ApolloClient({
  link: new HttpLink({
    uri:'http://localhost:3030/graphql',
  }),
  cache: new InMemoryCache(),
});

class App extends React.Component{ 
  render(){ 
    return(
      <ApolloProvider client={client}>
      <div>
       <Users/>
      </div>
      </ApolloProvider>
    )
  }
}

export default App;