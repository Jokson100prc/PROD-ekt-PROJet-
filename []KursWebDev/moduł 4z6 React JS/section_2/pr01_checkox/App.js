const PositiveMessage = () => <p> You can watch the movie.Welcome! </p>;
const NegativeMessage = () => (
  <p> You can not watch this video if you are under 16! </p>
);

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositiveMessage />;
      } else {
        return <NegativeMessage />;
      }
    }
  };
  render() {
    return (
      <>
        <h1> Buy a ticket for the horror of the year! </h1>{" "}
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={this.state.isConfirmed}
          />{" "}
          <label htmlFor="age"> I am at least 16 years old </label>{" "}
          <button type="submit"> Ticket Buy </button> {this.displayMessage()}{" "}
        </form>{" "}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
