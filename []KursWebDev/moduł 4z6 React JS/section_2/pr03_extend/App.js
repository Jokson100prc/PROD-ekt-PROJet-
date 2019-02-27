const Li = props => <li>{`fruit of ${props.txtCont}`}</li>;

class ArrayToList extends React.Component {
  state = {
    items: ["apple", "strawberry", "orange"]
  };

  render() {
    const Lits = this.state.items.map(item => <Li key={item} txtCont={item} />);

    return <ul>{Lits}</ul>;
  }
}
ReactDOM.render(<ArrayToList />, document.getElementById("root"));

// class App extends React.Component {
//   state = {
//     items: ["apple", "strawberry", "orange"]
//   };
//   render() {
//     return (
//       <ul>
//         {this.state.items.map(item => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));
