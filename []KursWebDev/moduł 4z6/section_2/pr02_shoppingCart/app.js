class App extends React.Component {
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
    const style = this.state.shoppingCart === 0 ? { opacity: 0.3 } : {};

    return (
      <div>
        <button
          disabled={this.state.shoppingCart ? false : true}
          onClick={this.handlerCartRemove}
        >
          -
        </button>

        <span style={style}> {this.state.shoppingCart} </span>

        <button
          disabled={
            this.state.shoppingCart === this.state.availableProducts
              ? true
              : false
          }
          onClick={this.handlerCartAdd}
        >
          +
        </button>
        {this.state.shoppingCart > 0 && (
          <button onClick={this.handlerCartClear}>Buy it now</button>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// class App extends React.Component {
//   state = {
//     availableProducts: 7,
//     shoppingCart: 1,
//   }

//   handleRemoveFromCart = () => {
//     this.setState({
//       shoppingCart: this.state.shoppingCart - 1,
//     })
//   }

//   handleAddToCart = () => {
//     this.setState({
//       shoppingCart: this.state.shoppingCart + 1,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button disabled={this.state.shoppingCart ? false : true} onClick={this.handleRemoveFromCart}>-</button>
//         <span> {this.state.shoppingCart} </span>
//         <button disabled={this.state.shoppingCart === this.state.availableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))
