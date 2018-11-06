import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'semantic-ui-react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  //cityData is what I chose as name
  renderWeather(cityData) {
    const name = cityData.city.name;
    //list is an array that we need to map through it
    const temp = cityData.list.map(weather => weather.main.temp);
    console.log(temp);

    return (
      <Table.Row>
        <Table.Cell key="name">{name}</Table.Cell>
        <Table.Cell key="name">
          <Sparklines height={100} width={140} data={temp}>
            <SparklinesLine color="red" />
          </Sparklines>
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
