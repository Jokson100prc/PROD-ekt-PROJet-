class Users extends React.Component {
  render() {
    return (
      <>
        <List>
          <User>
            <li>
              {" "}
              <button>Dlelete</button>
            </li>
          </User>
        </List>
      </>
    );
  }
}

ReactDOM.render(<Users />, document.getElementById("root"));
