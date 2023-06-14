import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

const initialValue = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    dispatch(
      addContact({
        name: value.name,
        number: value.number,
      })
    );
    resetForm();
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form>
        <h2>Contacts</h2>
        <div>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field
            type="tel"
            name="number"
            id="number"
            autoComplete="off"
            placeholder="number"
          />
        </div>
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};
