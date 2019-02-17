const data = {
  users: [
    {
      id: 1,
      age: 22,
      name: "Marry",
      sex: "female"
    },
    {
      id: 2,
      age: 42,
      name: "Larry",
      sex: "male"
    },
    {
      id: 3,
      age: 33,
      name: "Garry",
      sex: "male"
    },
    {
      id: 4,
      age: 17,
      name: "Anna",
      sex: "female"
    }
  ]
};

const Element = ({ content }) => {
  return (
    <div>
      <br />
      <p>User info:</p>
      <h1>User {content.name}</h1>
      <p>
        User age: <strong>{content.age}</strong>
      </p>
      <p>User sex: {content.sex}</p>
    </div>
  );
};

class ObjectList extends React.Component {
  state = {
    listSwitcher: "all"
  };
  UsersList() {
    // debugger;
    let users = this.props.data.users;

    switch (this.state.listSwitcher) {
      case "all":
        users = users.map(element => (
          <Element key={users.id} content={element} />
        ));
        return users;

      case "female":
        users = users.filter(element => element.sex === "female");
        users = users.map(element => (
          <Element key={users.id} content={element} />
        ));
        return users;

      case "male":
        users = users.filter(element => element.sex === "male");
        users = users.map(element => (
          <Element key={users.id} content={element} />
        ));
        return users;

      default:
        "Data Error";
    }
  }

  handlerListSwitcher(option) {
    this.setState({
      listSwitcher: option
    });
  }

  render() {
    return (
      <>
        <button onClick={this.handlerListSwitcher.bind(this, "all")}>
          All users
        </button>
        <button onClick={this.handlerListSwitcher.bind(this, "female")}>
          Female users
        </button>
        <button onClick={this.handlerListSwitcher.bind(this, "male")}>
          Male users
        </button>
        {this.UsersList()}
      </>
    );
  }
}
ReactDOM.render(
  <ObjectList data={data} />,
  document.getElementById("heroItems")
);
