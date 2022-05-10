import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './Nav';
import { Home } from './Home';
import Popular from './Popular';
import Results from './Results';
import Battle from './Battle';
import { NotFoundPage } from './NotFoundPage';

export const App = () => (
  <Router>
    <div className='container'>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/popular' component={Popular} />
        <Route exact path='/battle' component={Battle} />
        <Route exact path='/battle/results' component={Results} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
