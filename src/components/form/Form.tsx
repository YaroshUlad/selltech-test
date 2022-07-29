import React from 'react';

import { Button, FormControl, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { validationSchema } from '../../utils/validation/validation';
import { Positions } from '../positions/Positions';
import { Relations } from '../relations/Relations';

import styles from './FormWrapper.module.css';

export const Form = (): React.ReactElement => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      positions: '',
      relations: '',
      textField: '',
      input: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      navigate('/notification');
    },
  });
  const setValue = (name: string, value: string | string[] | null): void => {
    formik.setFieldValue(name, value, true);
  };

  return (
    <Paper className={styles.paper} elevation={12}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <FormControl>
          <Positions
            error={formik.errors.positions}
            name={formik.getFieldProps('positions').name}
            onChangeCallback={setValue}
          />
          <Relations
            error={formik.errors.relations}
            name={formik.getFieldProps('relations').name}
            onChangeCallback={setValue}
          />

          <TextField
            {...formik.getFieldProps('input')}
            error={!!formik.errors.input}
            label={formik.errors.input ? formik.errors.input : 'input'}
            type="input"
            margin="normal"
          />
          <TextField
            {...formik.getFieldProps('textField')}
            error={!!formik.errors.textField}
            label={formik.errors.textField ? formik.errors.textField : 'textField'}
            type="text"
            multiline
            rows={4}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            SUBMITS
          </Button>
        </FormControl>
      </form>
    </Paper>
  );
};
