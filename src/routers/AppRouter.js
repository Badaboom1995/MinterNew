import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import User from '../pages/User';
import SendCoin from '../pages/SendCoin';
import Transactions from '../pages/Transactions';
import Header from 'components/Blocks/Header';
import Navigation from '../components/Blocks/Navigation';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Header />
    <div className="dashboard">
      <div className={`dashboard__left-column`}>
        <Navigation />
      </div>
      <Switch>
        <Route path="/" component={SendCoin} exact />
        <Route path="/table" component={Transactions} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
