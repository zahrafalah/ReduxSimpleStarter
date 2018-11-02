// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import ReduxPromise from 'redux-promise';
// import rootReducer from './';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// ReactDOM.render(
//   //telling redux where the reducers are
//   <Provider store={createStoreWithMiddleware(rootReducer)}>
//     <App />
//   </Provider>,

//   document.getElementById('root')
// );
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
