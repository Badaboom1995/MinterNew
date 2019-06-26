import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import { createBrowserHistory } from 'history';
import NotFoundPage from '../pages/NotFoundPage.js';
import PrivateRoute from './PrivateRoute';
import Auth from '../HOC/Auth';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div className="dashboard">
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default Auth()(AppRouter);
