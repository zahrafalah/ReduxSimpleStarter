import React, { Component } from 'react';

export default class GoogleMap extends Component {
  componentDidMount() {
    //this is how we make the 3rd party libraries(googleMaps) work nicely
    //with react. this.refs.map
    const google = window.google.maps;
    console.log(window.google.maps);
    // the second arg is the zoom option
    new google.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    return <div ref="map" />;
  }
}
