import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import DatePicker from '../../components/DatePicker';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Spinner from '../../components/Spinner';
import { validationSchema } from './validation';
import { createEventRequest } from '../../sagas/event/actions';
import './_home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, errorsApi } = useSelector(s => s.event);

  const { handleSubmit, handleChange, values, errors, setFieldValue, setErrors } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      eventDate: null
    },
    validationSchema,
    onSubmit: values => {
      dispatch(createEventRequest({ ...values }));
    }
  });

  useEffect(() => {
    setErrors({ ...errors, ...errorsApi });
  }, [errorsApi]); // eslint-disable-line

  const renderInput = (name, label, value, error, icon, type) => (
    <Input name={name} label={label} onChange={handleChange} value={value} error={error} icon={icon} type={type} />
  );

  return (
    <div className="home">
      <form className="home-form" onSubmit={handleSubmit}>
        { renderInput('firstName', 'First Name *', values.firstName, errors.firstName, 'user' ) }
        { renderInput('lastName', 'Last Name *', values.lastName, errors.lastName, 'user' ) }
        { renderInput('email', 'Email *', values.email, errors.email, 'mail', 'email' ) }
        <DatePicker
          name="eventDate"
          label="Event Date *"
          value={values.eventDate}
          error={errors.eventDate}
          onChange={date => setFieldValue('eventDate', date)}
        />
        <Button disabled={isLoading} htmlType="submit" title="Verify Now" />
        <Spinner spin={isLoading} />
      </form>
    </div>
  );
};

export default Home;