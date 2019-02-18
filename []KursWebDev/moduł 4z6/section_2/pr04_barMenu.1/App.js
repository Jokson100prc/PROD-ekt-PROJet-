class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "abada", value: 25, active: false },
      { id: 2, name: "berimbao", value: 45, active: false },
      { id: 3, name: "musica da capoeira vol.3", value: 5, active: false },
      { id: 4, name: "camisa", value: 15, active: false },
      { id: 5, name: "atabaque", value: 50, active: false },
      { id: 6, name: "pandeiro", value: 30, active: false }
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
