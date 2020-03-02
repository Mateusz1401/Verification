import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import './_spinner.scss';

const Spinner = ({ spin, tip }) => (
  <div className="custom-spinner">
    <Spin spinning={spin} tip={tip} />
  </div>
);

Spinner.propTypes = {
  spin: PropTypes.bool.isRequired,
  tip: PropTypes.string
};

Spinner.defaultProps = {
  tip: null
};

export default Spinner;