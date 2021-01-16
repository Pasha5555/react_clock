import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Clock extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
      });

      // eslint-disable-next-line
      console.log(this.state.date.toLocaleTimeString())
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    const prevName = prevProps.name;
    const currName = this.props.name;

    if (prevProps.name !== this.props.name) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevName} to ${currName}`,
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const currDate = this.state.date;

    return (
      <>{currDate.toLocaleTimeString()}</>
    );
  }
}

Clock.propTypes = {
  name: PropTypes.number.isRequired,
};