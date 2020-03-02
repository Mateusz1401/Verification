import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import './_button.scss';

const ButtonCustom = ({ title, onClick, htmlType, disabled }) => (
  <div className="custom-button">
    <Button
      onClick={onClick}
      disabled={disabled}
      htmlType={htmlType}
      type="primary"
    >
      {title}
    </Button>
  </div>
);

ButtonCustom.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  htmlType: PropTypes.string,
  disabled: PropTypes.bool
};

ButtonCustom.defaultProps = {
  htmlType: 'button',
  disabled: false
};

export default ButtonCustom;