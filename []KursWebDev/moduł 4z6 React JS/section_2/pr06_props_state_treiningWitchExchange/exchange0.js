const Cash = props => {
  return (
    <>
      <p>
        {props.text} {(props.amount / props.ratio).toFixed(2)}
      </p>
    </>
  );
};

class App extends React.Component {
  state = {
    amount: ""
  };

  currencies = [
    {
      id: 1,
      name: "Dollar",
      ratio: 3.8,
      text: "# Your PLN cash in Dollar "
    },
    {
      id: 2,
      name: "GBP",
      ratio: 4.8,
      text: "# Your PLN cash in GBP "
    },
    {
      id: 3,
      name: "Euro",
      ratio: 4.2,
      text: "# Your PLN cash in Euro "
    },
    {
      id: 1,
      name: "Czech Crown",
      ratio: 1.7,
      text: "# Your PLN cash in Czech Crown "
    }
  ];

  handleValue = e => {
    this.setState({
      amount: e.target.value
    });
  };

  render() {
    const currency = this.currencies.map(e => (
      <Cash
        key={e.id}
        name={e.name}
        amount={this.state.amount}
        ratio={e.ratio}
        text={e.text}
      />
    ));

    return (
      <>
        <label>
          Your cash in PLN:
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleValue}
          />
        </label>
        {currency}
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root2"));
