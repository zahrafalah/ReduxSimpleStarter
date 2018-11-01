import React, { Component } from 'react';
import './App.css';
import BookList from './Containers/book_list';
import BookDetail from './Containers/book_detail';
export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
