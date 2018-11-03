//since FETCH_WEATHER is fragile we will import it to make
//sure any typo would make any problem
import { FETCH_WEATHER } from '../actions/index';
//because we want to show multiple rows for multiple
//city at a time we need to store it in an array instead
// of initialing our state=null.That implies that we need data structure
// in here, that is going to be list of sorts.
export default function(state = [], action) {
  console.log('Action received', action);

  //we need a switch statement in here to handle featchWather only
  switch (action.type) {
    // check if it is only with case of FETCH_WEATHER
    case FETCH_WEATHER:
      //we need to return a new arr that consist of previous and new
      //state. we should not use state.push() cz it is mutation of the state
      //these 2 are nearly identical.
      //return state.concat([action.payload.data]);
      //or by using some ES6 syntax ...
      return [action.payload.data, ...state]; //[city, city, city] NOT[city, [city, city]]
  }
  return state;
}
