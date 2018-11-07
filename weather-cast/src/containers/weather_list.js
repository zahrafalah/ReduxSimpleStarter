import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  //cityData is what I chose as name
  renderWeather(cityData) {
    const name = cityData.city.name;
    //list is an array that we need to map through it
    const temp = cityData.list.map(weather => weather.main.temp);
    const humid = cityData.list.map(weather => weather.main.humidity);
    const press = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;
    console.log(lon);

    console.log(temp);
    console.log(press);
    console.log(humid);

    return (
      <Table.Row key={name}>
        <Table.Cell>
          <GoogleMap lon={lon} lat={lat} />
        </Table.Cell>
        <Table.Cell>
          <Chart data={temp} color="red" units="K" />
        </Table.Cell>
        <Table.Cell>
          <Chart data={press} color="green" units="hPa" />
        </Table.Cell>
        <Table.Cell>
          <Chart data={humid} color="orange" units="%" />
        </Table.Cell>
      </Table.Row>
    );
  }

  render() {
    return (
      <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Temperature</Table.HeaderCell>
            <Table.HeaderCell>Pressure</Table.HeaderCell>
            <Table.HeaderCell>Humidity</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{this.props.weather.map(this.renderWeather)}</Table.Body>

        <Table.Footer>
          <Table.Row />
        </Table.Footer>
      </Table>
    );
  }
}

//(state)===({weather})
function mapStateToProps({ weather }) {
  //Whatever is returned will show up as props inside of BookList
  return { weather }; //=== { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
