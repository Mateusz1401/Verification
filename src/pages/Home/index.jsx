import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import DatePicker from '../../components/DatePicker';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { validationSchema } from './validation';
import { verifyRequest } from '../../sagas/verification/actions';
import './_home.scss';

const Home = () => {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, errors, setFieldValue } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      eventDate: null
    },
    validationSchema,
    onSubmit: values => {
      dispatch(verifyRequest({ ...values, eventDate: values.eventDate.format() }));
    }
  });

  const renderInput = (name, label, value, error, icon) => (
    <Input name={name} label={label} onChange={handleChange} value={value} error={error} icon={icon} />
  );

  return (
    <div className="home">
      <form className="home-form" onSubmit={handleSubmit}>
        { renderInput('firstName', 'First Name *', values.firstName, errors.firstName, 'user' ) }
        { renderInput('lastName', 'Last Name *', values.lastName, errors.lastName, 'user' ) }
        { renderInput('email', 'Email *', values.email, errors.email, 'mail' ) }
        <DatePicker name="eventDate" label="Event Date *" value={values.eventDate} error={errors.eventDate} onChange={date => setFieldValue('eventDate', date)} />
        <Button htmlType="submit" title="Verify Now" />
      </form>
    </div>
  );
};

export default Home;