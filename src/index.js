import React from 'react';
import ReactDOM from 'react-dom';

import Users from './components/Users/UsersComponent';
import NotFound from './components/NotFound/NotFoundComponent';

import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-client-preset';
import {Router, Route, browserHistory} from 'react-router';

const client = new ApolloClient({
  link: new HttpLink({
    uri:'http://localhost:3030/graphql',
  }),
  cache: new InMemoryCache(),
});

class Root extends React.Component{
  render() {
    return( 
      <div>{this.props.children}</div>
    );
  }
}

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

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <Route path="users" component={App}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);



ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
