import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import login from '../pages/components/common/login';
import regist from '../pages/components/common/regist';
// import table from '@/pages/components/funcPage/table'; // 失败
import table from '../pages/components/funcPage/table';
import DetailPage from '../pages/detail';
import NoMatch from '../pages/404';
import User from '../pages/user';

export default () => {
  return (
    <Switch>
      <Route exact path="/login" component={login} />
      <Route exact path="/regist" component={regist} />
      <Route exact path="/table" component={table} />
      <Route exact path="/detail" component={DetailPage} />
      <Route exact path="/user/:name" component={User} />
      <Route exact path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  );
};
