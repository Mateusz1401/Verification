import React from 'react';
import PropTypes from 'prop-types';

import './_error.scss';

const ErrorCustom = ({ errorMessage }) => (
  <span className="error-message">{errorMessage}</span>
);

ErrorCustom.propTypes = {
  errorMessage: PropTypes.string
};

ErrorCustom.defaultProps = {
  errorMessage: ''
};

export default ErrorCustom;