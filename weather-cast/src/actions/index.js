const API_KEY = 'd6d81d6eeca4ea40404e55fbb83365c4';
// URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
//or
ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

//Action creators always have to create action that return an object
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  //An action is an obj that always have a type
  return {
    type: FETCH_WEATHER
  };
}
