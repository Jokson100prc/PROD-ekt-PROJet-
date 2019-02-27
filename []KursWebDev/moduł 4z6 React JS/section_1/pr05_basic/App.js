class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: ""
  //   };
  // }

  state = {
    text: ""
  };

  handleClick() {
    const letter = "A";

    this.setState({
      text: this.state.text + letter
    });

    // this.setState(() => ({
    //   text: this.state.text + letter
    // }));
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick.bind(this)}>Add "A"</button> {/*  */}
        <h1>{this.state.text}</h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
