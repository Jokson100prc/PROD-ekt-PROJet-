const Header = () => {
  return ( <
    >
    <
    header >
    <
    h1 > React Function Component < /h1> <
    /header> <
    />
  );
};

const Blog = () => {
  return ( <
    >
    <
    section >
    <
    p >
    Lorem ipsum dolor sit amet consectetur adipisicing elit.Corrupti eveniet consequatur ea placeat mollitia illum similique ipsam qui exercitationem praesentium eaque, doloremque repudiandae deserunt,
    fugit asperiores porro aspernatur, voluptates nam ?
    <
    /p> <
    /section> <
    />
  );
};

const App = () => {
  return ( <
    >
    <
    Header / >
    <
    Blog / >
    <
    />
  );
};

ReactDOM.render( < App / > , document.getElementById("root"));



// class App2 extends React.Component {
//   state = {
//     number: "5 (number)",
//     txt: "word"
//   };
//   render() {
//     return (
//       <section>
//         <h2>
//           Class Component: example this.state ==> {this.state.txt} and{" "}
//           {this.state.number}
//         </h2>
//       </section>
//     );
//   }
// }


// ReactDOM.render(<App2 />, document.getElementById("root"));