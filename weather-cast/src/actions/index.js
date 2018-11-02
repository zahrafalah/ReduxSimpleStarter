import axios from 'axios';

const API_KEY = 'd6d81d6eeca4ea40404e55fbb83365c4';
// URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
//or
ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

//Action creators always have to create action that return an object
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  //making Ajax call by axios: take the url above and make a get request.
  //then return it as a promise(request) then pass it to payload
  const request = axios.get(url);

  //An action is an obj that always have a type. but payload is an extra
  //info that always contains more info about that particular action.
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
