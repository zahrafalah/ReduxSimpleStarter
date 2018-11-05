import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'semantic-ui-react';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    // const Temperature = cityData.
    return (
      <Table.Row key="name">
        <Table.Cell>{name}</Table.Cell>
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

        <Table.Body>
          {this.props.weather.map(this.renderWeather)}

          <Table.Row>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
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
