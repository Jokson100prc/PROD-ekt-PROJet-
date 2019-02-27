const MessageUnfilledCheckbox = () => {
  return (
    <React.Fragment>
      <p> Bla bla NO </p>
      <input type="submit" value="Buy Ticket" disabled />
    </React.Fragment>
  );
};
const MessageFilledCheckbox = () => {
  return (
    <React.Fragment>
      <p> Bla bla YES </p>
      <input type="submit" value="Buy Ticket" />
    </React.Fragment>
  );
};

class CheckboxShowMessage extends React.Component {
  state = {
    confirmMessage: false
  };

  hendleCheckbox = () => {
    this.setState({
      confirmMessage: !this.state.confirmMessage
    });
  };

  // DISPLAY_MESSAGE()
  displayMesage = e => {
    e.preventDefault();
    if (!this.state.confirmMessage) {
      return <MessageUnfilledCheckbox />;
    }
    if (this.state.confirmMessage) {
      return <MessageFilledCheckbox />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Buy a ticket for the THriller of the year!</h1>
        <form action="">
          <label htmlFor="permissioner">
            <input
              type="checkbox"
              name="permissioner"
              id="permissioner"
              onChange={this.hendleCheckbox}
              checked={this.state.hendleCheckbox}
            />
            I am at least 16 years old
          </label>
          {this.displayMesage()}
        </form>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<CheckboxShowMessage />, document.getElementById("root2"));
