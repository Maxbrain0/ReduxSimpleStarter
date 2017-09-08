// state argument is not application state, but only the state this
// reducer is responsible for

// reducers are in charge of changing state over time
// they do this through actions
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
