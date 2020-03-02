
import React from 'react';

import Layout from './components/Layout';
import Routes from './pages/routes';
import './styles/_main.scss';

const App = () => (
  <div className="verificationApp">
    <Layout>
      <Routes />
    </Layout>
  </div>
);

export default App;