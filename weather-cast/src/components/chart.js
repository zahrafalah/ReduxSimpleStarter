//this is a component cz it does not need to communicate with Redux. all the data will come from state.
import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { Header } from 'semantic-ui-react';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

class Chart extends Component {
  render() {
    return (
      <div>
        <Sparklines data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <Header as="h4" inverted>
          {average(this.props.data)} {this.props.units}
        </Header>
      </div>
    );
  }
}

export default Chart;
