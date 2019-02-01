const LiItem = props => {
  return <li>{`Item: ${props.content}`}</li>;
};

class ItemList extends React.Component {
  state = {
    items: ["first", "second", "third"]
  };

  render() {
    const Items = this.state.items.map((item, id) => (
      <LiItem key={id + 1} content={item} />
    ));

    return <ul>{Items}</ul>;
  }
}
ReactDOM.render(<ItemList />, document.getElementById("root2"));
