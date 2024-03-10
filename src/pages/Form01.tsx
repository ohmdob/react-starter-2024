import React from 'react';
import { Field, Form, Formik, FormikHelpers, FieldProps } from 'formik';
import { toast } from 'react-toastify';
import { validateForm01Schema } from '../validates';

interface FormValues {
  title: string;
  age: number;
}

const initialValues: FormValues = { title: '', age: 0 };

const Form01 = () => {

  const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    toast.success(`${values.title} ${values.age} Saved.`, {
      position: 'bottom-right',
    });
    actions.setSubmitting(false);
  };

  return (
    <div>
      <Formik
        validationSchema={validateForm01Schema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ touched, errors }) => (
          <Form>
            <div className="flex flex-col">
              <Field name="title">
                {({ field }: FieldProps<any>) => (
                  <div className="flex flex-row items-center mb-4">
                    <div className="text-gray-900 w-32 pr-4 text-right">Title: </div>
                    <input
                      {...field}
                      className="input-md"
                      placeholder="Title"
                      type="text"
                      autoComplete="off"
                    />
                    {touched.title && errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
                  </div>
                )}
              </Field>
              <Field name="age">
                {({ field }: FieldProps<any>) => (
                  <div className="flex flex-row items-center mb-4">
                    <div className="text-gray-900 w-32 pr-4 text-right">Age: </div>
                    <input
                      {...field}
                      className="input-sm"
                      placeholder="Age"
                      type="number"
                      autoComplete="off"
                    />
                    {touched.age && errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
                  </div>
                )}
              </Field>
              <div className="flex flex-row items-center mb-4">
                <div className="w-32 pr-4"></div>
                <button className="btn-md" type="submit">Save</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form01;
