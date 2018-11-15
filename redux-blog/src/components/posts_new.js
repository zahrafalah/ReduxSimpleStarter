import React, { Component } from 'react';
//Field component is a react component that automatically wires up with reduxForm
//reduxForm is just a function that acts like a connect func
import { Field, reduxForm } from 'redux-form';
import { Button, Checkbox, Form } from 'semantic-ui-react';

class PostsNew extends Component {
  //the field obj represent a single input or a single piece of state
  renderField(field) {
    return (
      <Form>
        <Form.Field>
          <label>{field.lable}</label>
          <input type="text" {...field.input} />
          {field.meta.error}
        </Form.Field>
      </Form>
    );
  }
  onSubmit(values) {
    //this === component
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/* here we need a component */}
        <Field name="title" lable="Title" component={this.renderField} />
        <Field name="tag" lable="Tag" component={this.renderField} />
        <Field name="content" lable="Content" component={this.renderField} />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
function validate(values) {
  //the err obj starts at completely empty
  const errors = {};

  //validate the inputs from 'values'
  if (!values.title) {
    errors.title = 'Enter a valid value!';
  }
  if (!values.tag) {
    errors.tag = 'Enter a valid value!';
  }
  if (!values.content) {
    errors.content = 'Enter a valid value!';
  }
  //if err is empty then the form is ready to submit
  //if the errors obj has ANY properties the redux form will assume the form is invalid
  return errors;
}

export default reduxForm({
  //validate: 'validate'
  validate,
  form: 'PostsNewForm'
})(PostsNew);
