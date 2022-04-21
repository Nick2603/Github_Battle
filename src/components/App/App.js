import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as styles from './App.module.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Battle from '../Battle/Battle';
import Popular from '../Popular/Popular';
import NotFoundPage from '../NotFoundPage';

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/battle'>
            <Battle />
          </Route>
          <Route exact path='/popular'>
            <Popular />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
