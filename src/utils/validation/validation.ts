import * as yup from 'yup';

import { maxLength } from '../constants/maxLength';
import { minLength } from '../constants/minLength';

export const validationSchema = yup.object().shape({
  positions: yup.string().required('Field is required'),
  relations: yup
    .array()
    .required('Field is required')
    .of(yup.string().required('Field is required')),
  textField: yup
    .string()
    .min(minLength, 'Too Short!')
    .max(maxLength, 'too long')
    .required('Field is required'),
  input: yup
    .string()
    .min(minLength, 'Too Short!')
    .max(maxLength, 'too long')
    .required('Field is required'),
});
