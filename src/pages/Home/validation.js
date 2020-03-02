import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Field is required'),
  lastName: Yup.string()
    .required('Field is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Field is required'),
  eventDate: Yup.mixed()
    .required('Field is required')
});