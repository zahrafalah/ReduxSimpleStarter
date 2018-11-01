//The combineReducers helper function turns an object whose
//values are different reducing functions into a single reducing function you can pass to createStore.

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active-book';

const rootReducer = combineReducers({
  //the key to this func is a piece of state called books with the value of a reducer.
  //we are passing this piece to the combine reducer and asking to actually how to make our apps .
  // a key to our 'global application state' called books
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
