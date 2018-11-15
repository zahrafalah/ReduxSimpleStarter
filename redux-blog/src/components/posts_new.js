import React, { Component } from 'react';
//Field component is a react component that automatically wires up with reduxForm
//reduxForm is just a function that acts like a connect func
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';

class PostsNew extends Component {
  //the field obj represent a single input or a single piece of state
  renderField(field) {
    //This class name is generalized for any conditional styling.If there was err it
    //will make the field red and will show the err txt. for doing so we need string
    //template to use ternary expression
    const className = `form ${field.meta.touched && field.meta.error ? 'error' : ''}`;

    return (
      <Form>
        <Form.Field className={className}>
          <label>{field.lable}</label>
          <input type="text" {...field.input} />
          {/* Touched: this property means that the input has been selected and been out of focus. */}
          {/* Ternary expression: */}
          {field.meta.touched ? field.meta.error : ''}
        </Form.Field>
      </Form>
    );
  }

  onSubmit(values) {
    //this === component
    // console.log(values);
    //posting a post to the API by calling the action creator
    // this.props.createPost(values); or
    this.props.createPost(values, () => {
      //this will make sure that only after the post has created(API request completed)
      // it will navigate to the other page.
      this.props.history.push('/');
    });
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
        <Button type="">
          <Link to="/">Cancel</Link>
        </Button>
      </Form>
    );
  }
}

//validating the form
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
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
