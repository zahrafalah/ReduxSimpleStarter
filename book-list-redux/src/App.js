import React, { Component } from 'react';
import './App.css';
import BookList from './Containers/book_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
