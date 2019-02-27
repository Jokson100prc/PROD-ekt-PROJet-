class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result
  };

  handleMatchClick(type, number = 1) {
    // debugger;
    if (type === "subtraction") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }));
    } else if (type === "reset") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: 0
      }));
    }
    if (type === "addition") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result + number
      }));
    }
  }

  render() {
    return ( <
      React.Fragment >
      <
      button onClick = {
        this.handleMatchClick.bind(this, "subtraction", 10)
      } >
      -10 <
      /button> <
      button onClick = {
        () => this.handleMatchClick("subtraction")
      } >
      -1 <
      /button> <
      button onClick = {
        this.handleMatchClick.bind(this, "addition", 10)
      } >
      +10 <
      /button> <
      button onClick = {
        this.handleMatchClick.bind(this, "addition", 1)
      } >
      +1 <
      /button> <
      button onClick = {
        this.handleMatchClick.bind(this, "reset")
      } >
      Reset <
      /button> <
      h1 > Click number: {
        this.state.count
      } < /h1> <
      h2 > Result: {
        this.state.result
      } < /h2> <
      /React.Fragment>
    );
  }
}

const startResultValue = 0;
ReactDOM.render( <
  Counter result = {
    startResultValue
  }
  />,
  document.getElementById("root")
);