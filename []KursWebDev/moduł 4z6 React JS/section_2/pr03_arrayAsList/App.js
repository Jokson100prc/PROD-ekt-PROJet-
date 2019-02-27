class New extends React.Component {
  state = {
    arr: ["apple", "plum", "pear"]
  };

  render() {
    return (
      <ul>
        {this.state.arr.map((a, id) => (
          <li key={id + 1}>{`fruit: ${a}`}</li>
        ))}
      </ul>
    );
  }
}
ReactDOM.render(<New />, document.getElementById("root"));

// class App extends React.Component {
//   state = {
//     items: ["jabłko", "gruszka", "pomarańcza"]
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
