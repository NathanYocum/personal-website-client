import React from 'react';
import ReactDOM from 'react-dom';
// import App from './routes/App';
import Users from './routes/users';
import registerServiceWorker from './registerServiceWorker';
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

const App = (
  <ApolloProvider client={client}>
  <div>
    
    <Users />
  </div>
  </ApolloProvider>
);


ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
