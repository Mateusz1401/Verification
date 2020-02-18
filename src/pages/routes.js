import React, { Suspense, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PathLink from '../utils/PathLinkUrl/PathLink';

import HomePage from './Home';
import LoadPage from './Loading';
const NotFoundPage = lazy(() => import('./NotFound'));

export const routes = {
  root: new PathLink('/')
};

const Routes = () => (
  <Suspense fallback={<LoadPage />}>
    <Switch>
      <Route exact path={routes.root.path} component={HomePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default withRouter(Routes);