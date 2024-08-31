import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field type="text" name="name" className={css.input} />
          </label>
          <label className={css.label}>
            Number
            <Field type="text" name="number" className={css.input} />
          </label>
          <button type="submit" className={css.button} disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
