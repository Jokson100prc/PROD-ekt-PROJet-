class ShoppingList2 extends React.Component {
  state = {
    item1: "onion",
    item2: "garlik",
    item3: "cranberrys"
  };

  render() {
    return (
      <>
        <h2>List 2:</h2>
        <ul>
          <ListItem2 name={this.state} />
          <ListItem2 name={this.state} />
          <ListItem2 name={this.state} />
        </ul>
      </>
    );
  }
}

class ListItem2 extends React.Component {
  render() {
    return (
      <li>
        {this.props.name} - {this.props.pcs}
      </li>
    );
  }
}

ReactDOM.render(<ShoppingList2 />, document.getElementById("root"));
