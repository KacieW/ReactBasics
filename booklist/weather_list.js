import React from'react';
import {connect} from'react-redux';
import Chart from'../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component{
  renderWeather(cityData){
    const temps = cityData.list.map((x)=>{
      return x.main.temp;
    });
    const pressure = cityData.list.map((x)=>{
      return x.main.pressure;
    });
    const humidity = cityData.list.map((x)=>{
      return x.main.humidity;
    });
    const lon=cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return(
      <tr key={cityData.city.name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color='orange' units='K'/></td>
        <td><Chart data={pressure} color='green' units='hPa' /></td>
        <td><Chart data={humidity} color='blue'  units='%'/></td>
      </tr>
    )
  }
  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {weather:state.weather}
}

export default connect(mapStateToProps)(WeatherList);
