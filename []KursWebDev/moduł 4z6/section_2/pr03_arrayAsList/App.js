class App extends React.Component {
  state = {
    items: ["jabłko", "gruszka", "pomarańcza"]
  };
  render() {
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
