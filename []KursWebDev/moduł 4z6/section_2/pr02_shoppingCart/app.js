class BasicShoppingCart extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0
  };

  handlerCartRemove = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    });
  };

  handlerCartAdd = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    });
  };

  handlerCartClear = () => {
    this.setState({
      shoppingCart: 0,
      availableProducts: this.state.availableProducts - this.state.shoppingCart
    });
  };

  render() {
    const style = shoppingCart === 0 ? { opacity: 0.3 } : {};
    const { shoppingCart, availableProducts } = this.state;
    const { handlerCartAdd, handlerCartClear, handlerCartRemove } = this;
    return (
      <div>
        <button
          disabled={shoppingCart ? false : true}
          onClick={handlerCartRemove}
        >
          -
        </button>

        <span style={style}> {shoppingCart} </span>

        <button
          disabled={shoppingCart === availableProducts ? true : false}
          onClick={handlerCartAdd}
        >
          +
        </button>
        {shoppingCart > 0 && (
          <button onClick={handlerCartClear}>Buy it now</button>
        )}
      </div>
    );
  }
}

ReactDOM.render(<BasicShoppingCart />, document.getElementById("root"));
