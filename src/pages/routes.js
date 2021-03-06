import React, { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PathLink from '../utils/PathLinkUrl/PathLink';

import HomePage from './Home';
import LoadPage from './Loading';
const NotFoundPage = lazy(() => import('./NotFound'));

export const routes = {
  root: new PathLink('/'),
  notFound: new PathLink('*')
};

const Routes = () => (
  <Router>
    <Suspense fallback={<LoadPage />}>
      <Switch>
        <Route exact path={routes.root.path} component={HomePage} />
        <Route path={routes.notFound.path} component={NotFoundPage} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;