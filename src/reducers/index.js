import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // these combine to make the state
  // reducer is responsible for creating state
  // BooksReducer creates state for books
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
