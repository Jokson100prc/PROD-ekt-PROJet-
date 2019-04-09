class App extends React.Component {
  state = {
    city: "London",
    text: "",
    isLoved: true,
    howManyTimes: "more"
  };

  handleChange = e => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  render() {
    return (
      <div>
        <label>
          Insert the city:&nbsp;
          <input
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <br />

        <label>
          Write some about this city:&nbsp;{" "}
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            type="textArea"
          />
        </label>
        <br />

        <label>
          If you love your city? &nbsp;
          <input
            name="isLoved"
            checked={this.state.isLoved}
            onChange={this.handleChange}
            type="checkbox"
          />
        </label>
        <br />

        <label>
          How many times you've bin there? &nbsp;
          <select
            name="howManyTimes"
            value={this.state.howManyTimes}
            onChange={this.handleChange}
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
