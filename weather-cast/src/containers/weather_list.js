import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import Chart from '../components/chart';

class WeatherList extends Component {
  //cityData is what I chose as name
  renderWeather(cityData) {
    const name = cityData.city.name;
    //list is an array that we need to map through it
    const temp = cityData.list.map(weather => weather.main.temp);
    const humid = cityData.list.map(weather => weather.main.humidity);
    const press = cityData.list.map(weather => weather.main.pressure);
    // console.log(temp);

    return (
      <Table.Row>
        <Table.Cell key="name">{name}</Table.Cell>
        <Table.Cell>
          <Chart data={temp} color="red" />
        </Table.Cell>
        <Table.Cell>
          <Chart data={press} color="green" />
        </Table.Cell>
        <Table.Cell>
          <Chart data={humid} color="orange" />
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
