const Cash = props => {
  return (
    <p>
      {props.text}
      {(props.amount / props.ratio).toFixed(2)}{" "}
    </p>
  );
};

class Exchange extends React.Component {
  state = {
    amount: ""
  };

  currencies = [
    {
      id: 1,
      ratio: 4.9,
      text: "Your PLN amount in GBP: "
    },
    {
      id: 2,
      ratio: 3.8,
      text: "Your PLN amount in Dollar: "
    },
    {
      id: 3,
      ratio: 4.2,
      text: "Your PLN amount in Euro: "
    },
    {
      id: 4,
      ratio: 0.17,
      text: "Your PLN amount in Czech Crown: "
    }
  ];

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };

  render() {
    const { amount } = this.state;

    const rateStatusElement = this.currencies.map(c => (
      <Cash key={c.id} text={c.text} amount={amount} ratio={c.ratio} />
    ));
    return (
      <>
        <input type="number" value={amount} onChange={this.handleChange} />
        {rateStatusElement}
      </>
    );
  }
}
ReactDOM.render(<Exchange />, document.getElementById("root"));
