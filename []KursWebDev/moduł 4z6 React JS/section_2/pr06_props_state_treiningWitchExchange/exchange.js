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
    amount: "",
    product: "potatoes"
  };

  static defaultProps = {
    currencies: [
      {
        id: 0,
        ratio: 1,
        text: "Your Polish Zloty (PLN) amount: "
      },
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
    ],
    prices: { potatoes: 1.79, garlic: 0.99, juice: 5.29 }
  };

  handleAmount = e => {
    this.setState({
      amount: e.target.value
    });
  };

  handleProduct = e => {
    this.setState({
      product: e.target.value
    });
  };

  insertSuffix(select) {
    if (select === "potatoes") {
      return <em>&nbsp;&nbsp;kg</em>;
    } else if (select === "garlic") {
      return <em>&nbsp;&nbsp;pst</em>;
    } else if (select === "juice") {
      return <em>&nbsp;&nbsp;liter</em>;
    } else {
      null;
    }
  }

  render() {
    const { amount, product } = this.state;

    const rateStatusElement = this.props.currencies.map(c => (
      <Cash key={c.id} text={c.text} amount={amount} ratio={c.ratio} />
    ));
    return (
      <>
        <label>
          Choose your product &nbsp;
          <select value={product} onChange={this.handleProduct}>
            <option value="potatoes">potatoes</option>
            <option value="garlic">garlic</option>
            <option value="juice">juice</option>
          </select>
        </label>

        <br />
        <br />

        <label>
          <input type="number" value={amount} onChange={this.handleAmount} />
          {this.insertSuffix(this.state.product)}
        </label>
        {rateStatusElement}
      </>
    );
  }
}
ReactDOM.render(<Exchange />, document.getElementById("root1"));
