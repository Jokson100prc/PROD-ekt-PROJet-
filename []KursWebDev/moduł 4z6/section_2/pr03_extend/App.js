const data = {
  users: [
    {
      id: 1,
      name: "Harry",
      age: "21",
      sex: "male"
    },
    {
      id: 2,
      name: "Jane",
      age: "55",
      sex: "female"
    },
    {
      id: 3,
      name: "Marry",
      age: "19",
      sex: "female"
    },
    {
      id: 4,
      name: "Francis",
      age: "36",
      sex: "male"
    }
  ]
};

const Person = ({ user }) => (
  <ul>
    <li>
      <h2>Person name: {user.name}</h2>
      <h3>Age: {user.age}</h3>
      <h3>Id: {user.id}</h3>
    </li>
  </ul>
);

class PersonsList extends React.Component {
state={
  select: "all"
}

hangleAll=(e, option)=>{
e.preventDefault();
  this.setState({
    select: option
  })
}

hangleFem=(e)=>{
  e.preventDefault();
  this.setState({
    select: "female"
  })
}

hangleMal=(e)=>{
  e.preventDefault();
  this.setState({
    select: "male"
  })
}

  render() {
    let users = this.props.data.users;
    users = users.filter(user => user.sex === "male");

    const Persons = users.map(user => <Person key={user.id} user={user} />);

    return (
      <>
        {Persons};
        <button className="btnAll" type="submit" onClick={this.hangleAll.bind(this, "all")}></button>;
        <button className="btnFem" type="submit" {this.hangleFem.bind(this, "female")}></button>;
        <button className="btnMal" type="submit" {this.hangleMal.bind(this, "male")}></button>;
      </>
    );
  }
}
ReactDOM.render(<PersonsList data={data} />, document.getElementById("root"));
