const header = <h1 className="title">Hello in React!</h1>;

const classBig = "big";

const handleClick = () => alert("Clicked");

const main = (
  <div>
    <h2 person="persons" onClick={handleClick} class="red">
      First article
    </h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem harum
      culpa, perferendis quos vero laborum. Amet tempore eaque, vel sunt iure
      quibusdam, adipisci accusantium, dignissimos ipsum voluptatibus enim totam
      facere.
    </p>
  </div>
);

const text = "&copy; Jokson100%";
const largeTXT =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque reprehenderit non veniam sint voluptatum repellendus odio, delectus ex aut dolorem. Quidem perferendis maiores placeat repellendus nesciunt, debitis dicta nemo cumque!";
const footer = (
  <footer>
    <p className={classBig}>{text}</p>
    {largeTXT}
  </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
