import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import './_button.scss';

const ButtonCustom = ({ title, onClick, htmlType }) => (
  <div className="custom-button">
    <Button htmlType={htmlType} type="primary" onClick={onClick}>{title}</Button>
  </div>
);

ButtonCustom.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  htmlType: PropTypes.string
};

ButtonCustom.defaultProps = {
  htmlType: 'button'
};

export default ButtonCustom;