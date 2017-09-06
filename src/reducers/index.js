import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer //books is whatever is returned from books BooksReducer
                      //It is not the function, but the returned value (I think)
});

export default rootReducer;
