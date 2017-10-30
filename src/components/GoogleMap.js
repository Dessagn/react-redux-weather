/*global google*/
import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    const place = { lat: this.props.lat, lng: this.props.lon };
    const map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: place
    });
    new google.maps.Marker({
      position: place,
      map: map
    });
  }

  render() {
    return (
      <div ref="map" id="map" />
    );
  }
}

export default GoogleMap;