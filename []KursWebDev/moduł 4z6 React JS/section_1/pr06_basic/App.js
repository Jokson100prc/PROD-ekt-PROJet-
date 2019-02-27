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
    const number = Math.floor(Math.random() * 10);

    this.setState({
      text: this.state.text + number
    });

    // this.setState(() => ({
    //   text: this.state.text + letter
    // }));
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick.bind(this)}>
          {this.props.btnTitle}
        </button>
        <PanelResult text={this.state.text} />
      </React.Fragment>
    );
  }
}

const PanelResult = props => {
  return <h1>{props.text}</h1>;
};

ReactDOM.render(<App btnTitle="Add number" />, document.getElementById("root"));
