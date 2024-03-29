import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login/index';
import Trailers from './pages/trailers/index';

import GlobalStyles from './globalStyle';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Login } />
            <Route path="/trailers" component={ Trailers } />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
