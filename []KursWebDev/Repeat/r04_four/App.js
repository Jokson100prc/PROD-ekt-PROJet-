class ShowAndHide extends React.Component {
  state = {
    SHActiveFlag: false
  };

  SHBtnHandler = () => {
    this.setState({
      SHActiveFlag: !this.state.SHActiveFlag
    });
  };

  render() {
    return (
      <>
        <button onClick={this.SHBtnHandler}>
          {this.state.SHActiveFlag ? "Hide" : "Show"}
        </button>

        {this.state.SHActiveFlag && (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ut
            optio, unde adipisci commodi eveniet repellendus iste sint deserunt
            quidem autem, quo quam nulla exercitationem porro laborum nam hic
            est?
          </p>
        )}
      </>
    );
  }
}

ReactDOM.render(<ShowAndHide />, document.getElementById("root"));
