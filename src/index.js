import React from 'react';
import ReactDOM from 'react-dom';

//Components
import NotFound from './components/NotFound/NotFoundComponent';
import Root from './components/RootComponent';
import App from './components/App/App';
import Index from './components/Index/Index';
import registerServiceWorker from './registerServiceWorker';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Index}/>
      <Route path="index" component={Index}/>
      <Route path="users" component={App}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
