import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Welcome from './components/pages/Welcome';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Portfolio' component={Portfolio} />
          <Route exact path='/Contact' component={Contact} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
