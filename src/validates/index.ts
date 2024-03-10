import * as yup from 'yup';

export const validateForm01Schema = yup.object().shape({
    title: yup
      .string()
      .required('โปรดระบุ'),
    age: yup
      .number()
      .positive('must be a positive')
      .required('โปรดระบุ'),
  });