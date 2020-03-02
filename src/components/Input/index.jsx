import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';

import ErrorMessage from '../Error';
import './_input.scss';

const InputCustom = ({ placeholder, value, onChange, icon, error, name, label, type }) => (
  <div className="custom-input">
    {label && <label>{label}</label>}
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={name}
      type={type}
      prefix={<Icon type={icon} />}
    />
    <ErrorMessage errorMessage={error} />
  </div>
);

InputCustom.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
};

InputCustom.defaultProps = {
  placeholder: '',
  icon: '',
  name: '',
  label: '',
  type: 'text'
};

export default InputCustom;