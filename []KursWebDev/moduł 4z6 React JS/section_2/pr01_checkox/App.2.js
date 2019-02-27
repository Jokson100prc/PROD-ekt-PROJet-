const displayMessage = (isFormSubmitted, isConfirmed) => {
  if (isFormSubmitted) {
    if (isConfirmed) {
      return <ValidationMessage txt="You can watch the movie.Welcome!" />;
    } else {
      return (
        <ValidationMessage txt="You can not watch this video if you are under 16!" />
      );
    }
  }
};

const OrderForm = props => {
  const { submit, change, isConfirmed } = props;

  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={isConfirmed} />
      <label htmlFor="age"> I am at least 16 years old </label>
      <button type="submit"> Ticket Buy </button>
    </form>
  );
};

const ValidationMessage = props => {
  const { txt } = props; // destructuring

  return <p>{txt}</p>;
};

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

  render() {
    const { isConfirmed, isFormSubmitted } = this.state; // destructuring
    const { handleCheckboxChange, handleFormSubmit } = this; // destrukturyzacja

    return (
      <>
        <h1> Buy a ticket for the horror of the year! </h1>

        <OrderForm
          change={handleCheckboxChange}
          submit={handleFormSubmit}
          checked={isConfirmed}
        />

        {displayMessage(isFormSubmitted, isConfirmed)}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
