class App extends React.Component {
  state = {
    value: ""
  };

  handleInputHange = e => {
    console.log("Content value during Event: " + e.target.value);
    console.log("Content value before setState: " + this.state.value);
    this.setState({
      value: e.target.value
    });
    console.log("Content value after setState: " + this.state.value);
  };

  handleResetClick = () => {
    this.setState({
      value: ""
    });
  };

  render() {
    console.log("Content value during render: " + this.state.value);
    return (
      <React.Fragment>
        <input
          value={this.state.value}
          placeholder="write!"
          onChange={this.handleInputHange}
          type="text"
        />
        <button onClick={this.handleResetClick}>{this.props.btnReset}</button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App btnReset="Reset" />, document.getElementById("root"));
