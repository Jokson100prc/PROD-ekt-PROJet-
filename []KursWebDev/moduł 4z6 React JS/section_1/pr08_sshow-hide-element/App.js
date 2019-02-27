class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false
    };
    this.handleMesssageBtn = this.handleMesssageBtn.bind(this);
  }

  handleMesssageBtn() {
    this.setState(prevState => ({
      messageIsActive: !prevState.messageIsActive
    }));
  }

  render() {
    console.log(this.state.messageIsActive);
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ex placeat amet sunt voluptatibus consequatur ad corrupti quod tempora facere. Natus, harum? Iure in doloremque provident quis consequatur maiores dolor!";

    return (
      <React.Fragment>
        <button onClick={this.handleMesssageBtn}>
          {this.state.messageIsActive ? "Hide" : "Show"}
        </button>
        {this.state.messageIsActive && <p>{text}</p>}
        {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
        {/* <p>{this.state.messageIsActive && text}</p> */}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
