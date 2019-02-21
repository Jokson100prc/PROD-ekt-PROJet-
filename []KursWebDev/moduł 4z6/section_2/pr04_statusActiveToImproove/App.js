class App extends React.Component {
  state = {
    storageList: [
      { id: 1, name: "helmet", pts: 5, active: false },
      { id: 2, name: "shild", pts: 3, active: false },
      { id: 3, name: "armor", pts: 0, active: false },
      { id: 4, name: "bow", pts: 11, active: false },
      { id: 5, name: "sword", pts: 2, active: false },
      { id: 6, name: "arrow", pts: 111, active: false }
    ]
  };
  render() {
    return (
      <>
        <Header storageList={this.state.storageList} />
        <Storage storageList={this.state.storageList} />
      </>
    );
  }
}
