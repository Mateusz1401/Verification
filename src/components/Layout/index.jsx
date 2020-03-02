
import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import './_layout.scss';

const Layout = ({ children }) => {

  return (
    <div className="layout">
      <div className="app-container">
        <div className="content">
          <Container>
            {children}
          </Container>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;