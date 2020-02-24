import React from 'react';
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

  const { handleSubmit, handleChange, values, errors, setFieldValue } = useFormik({
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

  const renderInput = (name, label, value, error, errorApi, icon, type) => (
    <Input name={name} label={label} onChange={handleChange} value={value} error={error ? error : errorApi} icon={icon} type={type} />
  );

  return (
    <div className="home">
      <form className="home-form" onSubmit={handleSubmit}>
        { renderInput('firstName', 'First Name *', values.firstName, errors.firstName, errorsApi.firstName, 'user' ) }
        { renderInput('lastName', 'Last Name *', values.lastName, errors.lastName, errorsApi.lastName, 'user' ) }
        { renderInput('email', 'Email *', values.email, errors.email, errorsApi.email, 'mail', 'email' ) }
        <DatePicker
          name="eventDate"
          label="Event Date *"
          value={values.eventDate}
          error={errors.eventDate ? errors.eventDate : errorsApi.eventDate}
          onChange={date => setFieldValue('eventDate', date)}
        />
        <Button disabled={isLoading} htmlType="submit" title="Verify Now" />
        <Spinner spin={isLoading} />
      </form>
    </div>
  );
};

export default Home;