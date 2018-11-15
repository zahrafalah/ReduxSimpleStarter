//we are using lodash lib to transfer the arr of data from payload to an object
//with key & value based on our needs.[{},{},{}]-->{id:{},id:{},id:{}}
import _ from 'lodash';

//importing data from action creator
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

//Our goal here inside this reducer is to return an object that contains the ID of every
//post as the key and then the value will be the actual post itself.
export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      //... means lets fetch and add to any possible previous posts that
      //has been fetched. Take all those and put it in this new obj.
      //[]: by this we are not making a new arr, but key interpolation means we are asking to
      //make a new key and set it to new value.then add them to the overall state
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
