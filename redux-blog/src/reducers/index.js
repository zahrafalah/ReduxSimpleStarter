import { combineReducers } from 'redux';
//Based on documents reduxForm is going to validate the inputs of its form.installed by npm modules.
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
