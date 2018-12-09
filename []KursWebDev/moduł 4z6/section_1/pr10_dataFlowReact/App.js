class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result
  };

  handleMatchClick = (type, number = 1) => {
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
  };

  render() {
    return (
      <>
        <MathButton
          name="-10"
          number={10}
          type="subtraction"
          click={this.handleMatchClick}
        />
        <MathButton
          name="-1"
          number={1}
          type="subtraction"
          click={this.handleMatchClick}
        />
        <MathButton
          name="+10"
          number={10}
          type="addition"
          click={this.handleMatchClick}
        />
        <MathButton
          name="+1"
          number={1}
          type="addition"
          click={this.handleMatchClick}
        />
        <MathButton name="reset" type="reset" click={this.handleMatchClick} />

        <ResultPanel count={this.state.count} result={this.state.result} />
      </>
    );
  }
}

const MathButton = props => {
  return (
    <button onClick={() => props.click(props.type, props.number)}>
      {props.name}
    </button>
  );
};

const ResultPanel = props => {
  return (
    <>
      <h1>
        Click number: {props.count}{" "}
        {props.count % 10 ? null : <span>Eroor: Processor is DEAD!</span>}
      </h1>
      <h2>Result: {props.result}</h2>
    </>
  );
};

const startResultValue = 0;
ReactDOM.render(
  <Counter result={startResultValue} />,
  document.getElementById("root")
);
