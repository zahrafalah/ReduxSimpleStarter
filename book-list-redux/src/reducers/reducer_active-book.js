//all reducers gets two args: the current state and action
//reducers are only be called when an action occurs
//the state is not the apps state but the state this reducer is responsible for
export default function ActiveBook(state = null, action) {
  //to return a new state we need a switch that check the type of the new state
  switch (action.type) {
    //if it is this case: then return that
    case 'BOOK_SELECTED':
      return action.payload;
  }
  //if we dont care about the current action just pass the state through
  return state;
}
