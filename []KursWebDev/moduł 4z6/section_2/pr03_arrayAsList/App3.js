const data = {
  users: [
    {
      id: 1,
      name: "Agnes",
      age: "39"
    },
    {
      id: 1,
      name: "Agnes",
      age: "39"
    },
    {
      id: 1,
      name: "Agnes",
      age: "39"
    }
  ]
};

const Person = ({ user }) => (
  <li>
    <h2>Person name: {user.name}</h2>
    <h3>Age: {user.age}</h3>
    <h3>Id: {user.id}</h3>
  </li>
);
class PersonsList extends React.Component {
  render() {
    const users = this.props.data.users;

    const Persons = users.map(user => <Person key={user.id} user={user} />);

    return <ul>{Persons};</ul>;
  }
}
ReactDOM.render(<PersonsList data={data} />, document.getElementById("root3"));

// const User = props => (
//   <div>
//     <h1>User {props.user.name}</h1>
//     <h2>Age: {props.user.age}</h2>
//   </div>
// );

// class ListOfUsers extends React.Component {
//   render() {
//     const Users = this.props.data.users.map(user => (
//       <User key={user.id} user={user} />
//     ));

//     return <div>{Users};</div>;
//   }
// }
// ReactDOM.render(<ListOfUsers data={data} />, document.getElementById("root3"));
