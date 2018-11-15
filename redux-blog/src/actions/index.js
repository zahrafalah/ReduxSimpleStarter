//to make the actual request
import axios from 'axios';

//to avoid typos
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

//this action creator which is supposed to fetch a list of posts and return them to that reducer
//or it needs to reach out to that (redux blog API)
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

//action creator
export function fetchPosts() {
  //making the request
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  //action
  return {
    type: FETCH_POSTS,
    //assign the const request to the payload, then immediately the middleware is going to resolve the action for us
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
