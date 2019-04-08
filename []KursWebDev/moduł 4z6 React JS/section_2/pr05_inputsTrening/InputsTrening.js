class App extends React.Component {
  state = {
    city: "London",
    text: "",
    isLoved: true,
    howManyTimes: "more"
  };

  handleCityChange = event => {
    this.setState({
      city: event.target.value
    });
  };

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleLovedChecked = e => {
    this.setState({
      isLoved: e.target.checked
    });
  };

  handleHowManyTimes = e => {
    this.setState({
      howManyTimes: e.target.value
    });
  };

  render() {
    return (
      <div>
        <label>
          Insert the city:&nbsp;
          <input
            value={this.state.city}
            onChange={this.handleCityChange}
            type="text"
          />
        </label>
        <br />

        <label>
          Write some about this city:&nbsp;{" "}
          <input
            value={this.state.text}
            onChange={this.handleTextChange}
            type="textArea"
          />
        </label>
        <br />

        <label>
          If you love your city? &nbsp;
          <input
            checked={this.state.isLoved}
            onChange={this.handleLovedChecked}
            type="checkbox"
          />
        </label>
        <br />

        <label>
          How many times you've bin there? &nbsp;
          <select
            value={this.state.howManyTimes}
            onChange={this.handleHowManyTimes}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">more</option>
            <option value="I live there">I live there</option>
          </select>
        </label>
        <br />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
