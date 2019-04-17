// const GBP = props => {
//   return (
//     <p>
//       Your PLN amount in GBP:{" "}
//       {props.amount / props.ratio === 0
//         ? ""
//         : (props.amount / props.ratio).toFixed(2)}
//     </p>
//   );
// };

// const Dollar = props => {
//   const rate = props.amount / props.ratio;
//   return <p>Your PLN amount in Dollar: {rate === 0 ? "" : rate.toFixed(2)}</p>;
// };

// const Euro = props => {
//   const rate = props.amount / props.ratio;
//   const rateToFixed = (props.amount / props.ratio).toFixed(2);
//   return <p>Your PLN amount in Euro: {rate === 0 ? "" : rateToFixed}</p>;
// };

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
    // ratioGBP: 4.9,
    // ratioDollar: 3.8,
    // ratioEuro: 4.2
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
        {/* <GBP amount={amount} ratio={ratioGBP} />
        <Dollar amount={amount} ratio={ratioDollar} />
        <Euro amount={amount} ratio={ratioEuro} /> */}
        {/* <Cash
          text={"Your PLN amount in GBP: "}
          amount={amount}
          ratio={ratioGBP}
        />
        <Cash
          text={"Your PLN amount in Dollar: "}
          amount={amount}
          ratio={ratioDollar}
        />
        <Cash
          text={"Your PLN amount in Euro: "}
          amount={amount}
          ratio={ratioEuro}
        /> */}
        {rateStatusElement}
      </>
    );
  }
}
ReactDOM.render(<Exchange />, document.getElementById("root"));
