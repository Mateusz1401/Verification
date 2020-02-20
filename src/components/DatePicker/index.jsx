import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

import ErrorMessage from '../Error';
import './_datePicker.scss';

const DatePickerCustom = ({ value, onChange, error, name, label }) => (
  <div className="custom-datePicker">
    {label && <label>{label}</label>}
    <DatePicker name={name} onChange={onChange} value={value} />
    <ErrorMessage errorMessage={error} />
  </div>
);

DatePickerCustom.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape(),
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string
};

DatePickerCustom.defaultProps = {
  value: null,
  label: '',
  error: '',
  name: ''
};

export default DatePickerCustom;