class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "rice ala vege", active: true },
      { id: 2, name: "chips & cheese", active: false },
      { id: 3, name: "Tea", active: false },
      { id: 4, name: "cocoa", active: false },
      { id: 5, name: "sandwich", active: false },
      { id: 6, name: "fruit & salads", active: true }
    ]
  };
  render() {
    return (
      <>
        <Header items={this.state.items} />
        <ListItems />
      </>
    );
  }
}
