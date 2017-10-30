import React, { Component } from 'react';
import { connect } from 'react-redux';

import SparkChart from '../components/SparkLinesChart';
//import ReChart from '../components/RechartsChart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    let temp = [], pressure=[], humidity= [];
    temp = cityData.list.map((value) => parseInt(value.main.temp)-273);
    pressure = cityData.list.map((value) => value.main.pressure);
    humidity = cityData.list.map((value) => value.main.humidity);
    const city = cityData.city;
    //const {name, country} = city;
    const { lon, lat } = city.coord;

    return(
        <tr key={cityData.city.name }>
          <td> <GoogleMap lon={lon} lat={lat} /> </td>
          <td><SparkChart data={temp} color="orange" unit="&#8451;" /></td>
          <td><SparkChart data={pressure} color="blue" unit="hPa" /></td>
          <td><SparkChart data={humidity} color="green" unit="%" /></td>
        </tr>
    );
  };
  render() {
    return (
      <table className="table table-hover">
        <thead className="center">
          <tr>
            <th className="city">City</th>
            <th>Temprature (&#8451;)</th>
            <th>Pressure (hPa) </th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}
/**
 * This is completely same as
 * function mapSateToProps({ weather }) {
 *  return {weather: state.weather};  OR
 *  return {weather};
 * }
 */

export default connect(mapStateToProps)(WeatherList);