import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyC4f-CdOH7kwmwpg3LsjPVgiWCyyMx95KU';
//call to YouTube API to call to get some info,
// the first arg would be a search term, we pass an obj with key and a term
// 2nd arg is the call back func
YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
  console.log(data);
});
//Take this component's generated HTML and put it on the page(In the DOM)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
