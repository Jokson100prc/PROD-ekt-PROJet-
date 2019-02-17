const data = {
  gamblerHeroes: [
    {
      id: 1,
      namefirst: "John",
      namelast: "Snow",
      ancestry: "Stark",
      blood: "Ned Stark bastard",
      position: "Night Watch, Lord Comandors squire",
      sex: "male",
      weapon: "sword"
    },
    {
      id: 2,
      namefirst: "Thyrion",
      namelast: "Lanister",
      ancestry: "Lanister",
      blood: "son of Tywin Lanister",
      position: "Tywins Lanister Hand of King",
      name2: "Imp",
      name3: "dwarth",
      sex: "male",
      weapon: "mind and word"
    },
    {
      id: 3,
      namefirst: "Deanerys",
      namelast: "Targaryen",
      ancestry: "Targaryen",
      blood: "daughter of Mad King",
      position: "Khaleesi, Mother of Dragons",
      sex: "female",
      weapon: "faith in self and dragons"
    },
    {
      id: 4,
      namefirst: "Arye",
      namelast: "Stark",
      ancestry: "Stark",
      blood: "doughter of Eddard Stark",
      position: "refugee",
      sex: "female",
      weapon: "surviver"
    }
    // {
    //     id: ,
    //     namefirst: "",
    //     namelast: "",
    //     ancestry: "",
    //     blood: "",
    //     position: "",
    //     name2: "",
    //     name3: "",
    //     sex: "",
    //     weapon: ""
    //   },
  ]
};

const Element = ({ content }) => {
  return (
    <div>
      <h2>The name Of Hero is: {content.namefirst}</h2>
      <h2>And last name: {content.namelast}</h2>
      <p>
        {content.sex === "female" ? "She " : "He "} is from {content.ancestry}{" "}
        family
      </p>
      <p>
        and {content.sex === "female" ? "She " : "He "} is {content.blood}
      </p>
      <p>Position:{content.position}</p>
      <p>Nickname: {content.name2}</p>
      <p>Nickname: {content.name3}</p>
      <p>Master of {content.weapon}</p>
    </div>
  );
};

class HeroesFromThroneGamblers extends React.Component {
  state = {
    selected: "all"
  };

  handlerAncestry(option) {
    this.setState({
      selected: option
    });
  }

  selectorByAncestry() {
    // debugger;
    let gamblerHeroes = this.props.data.gamblerHeroes;
    // gamblerHeroes = gamblerHeroes.map(elm => (
    //   <Element key={elm.id} content={elm} />
    // ));
    switch (this.state.selected) {
      case "all":
        gamblerHeroes = gamblerHeroes.map(elm => (
          <Element key={elm.id} content={elm} />
        ));
        return gamblerHeroes;

      case "Stark":
        gamblerHeroes = gamblerHeroes.filter(elm => elm.ancestry === "Stark");
        gamblerHeroes = gamblerHeroes.map(elm => (
          <Element key={elm.id} content={elm} />
        ));
        return gamblerHeroes;

      case "Lanister":
        gamblerHeroes = gamblerHeroes.filter(
          elm => elm.ancestry === "Lanister"
        );
        gamblerHeroes = gamblerHeroes.map(elm => (
          <Element key={elm.id} content={elm} />
        ));
        return gamblerHeroes;

      case "Stark":
        gamblerHeroes = gamblerHeroes.filter(elm => elm.ancestry === "Stark");
        gamblerHeroes = gamblerHeroes.map(elm => (
          <Element key={elm.id} content={elm} />
        ));
        return gamblerHeroes;

      case "Targaryen":
        gamblerHeroes = gamblerHeroes.filter(
          elm => elm.ancestry === "Targaryen"
        );
        gamblerHeroes = gamblerHeroes.map(elm => (
          <Element key={elm.id} content={elm} />
        ));
        return gamblerHeroes;

      default:
        "...White Walkers...";
        <h2>"...White Walkers..."</h2>;
    }
  }

  render() {
    return (
      <>
        <button onClick={this.handlerAncestry.bind(this, "all")}>
          All families
        </button>
        <button onClick={this.handlerAncestry.bind(this, "Stark")}>
          Selected by Stark ancestry
        </button>
        <button onClick={this.handlerAncestry.bind(this, "Targaryen")}>
          Selected by Targaryen
        </button>
        <button onClick={this.handlerAncestry.bind(this, "Lanister")}>
          Selected by Lanister
        </button>
        {this.selectorByAncestry()}
      </>
    );
  }
}
ReactDOM.render(
  <HeroesFromThroneGamblers data={data} />,
  document.getElementById("root")
);
