//this is a component cz it does not need to communicate with Redux. all the data will come from state.
import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Chart extends Component {
  render() {
    return (
      <Sparklines height={100} width={140} data={this.props.data}>
        <SparklinesLine color={this.props.color} />
      </Sparklines>
    );
  }
}

export default Chart;
