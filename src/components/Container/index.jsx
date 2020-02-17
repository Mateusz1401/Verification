
import React from 'react';
import PropTypes from 'prop-types';

import './_container.scss';

const Container = ({ children, containerStyle }) => (
  <section className={`container ${containerStyle}`}>
    {children}
  </section>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  containerStyle: PropTypes.string
};

Container.defaultProps = {
  containerStyle: ''
};

export default Container;