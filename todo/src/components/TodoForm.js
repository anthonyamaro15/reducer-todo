import React from "react";
import { Formik, Form, Field } from "formik";

const TodoForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ item: "" }}
        onSubmit={(values, { resetForm }) => {
          const { item } = values;
          const obj = {
            item,
            completed: false,
            id: new Date().toString(),
          };
          console.log(obj);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <label htmlFor="todo">
              <Field type="text" name="item" id="todo" placeholder="add todo" />
            </label>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoForm;
