import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 100
    };
  }

  componentDidMount() {
    if (this.props.start !== undefined) {
      this.setState({ time: this.props.start });
    }
    this.timerID = setInterval(() => this.tick(), 1000);
    if (this.state.time === 0){
      return () => clearInterval(timer);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1
    });
  }

  render() {
    const { time } = this.state;
    return (
      <>
        {time <= 0 ? (
          <div style={{display:"none"}}>bruh</div>
        ) : (
          <h1 style={{ textAlign: "center" }}>{this.state.time}</h1>
        )}
      </>
    );
  }
}

export default Timer;
