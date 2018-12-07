class ShoppingList extends React.Component {
  state = {
    item1: "tomatos",
    item2: "bread",
    item3: "juice"
  };

  render() {
    return (
      <>
        <h1>My shopping list:</h1>
        <ul>
          <ItemList name={this.state.item1} pcs={2 * 3} />
          <ItemList name={this.state.item2} pcs={1} />
          <ItemList name={this.state.item3} pcs={1} />
        </ul>
      </>
    );
  }
}

const ItemList = props => {
  return (
    <li>
      {props.name} - {props.pcs}
    </li>
  );
};

ReactDOM.render(<ShoppingList />, document.getElementById("root"));

// class Simpleton extends React.Component {
//   render() {
//     return (
//       <>
//         <header>
//           <h1>Title</h1>
//           <nav>
//             <ul>
//               <NavListItem />
//               <NavListItem />
//               <NavListItem />
//             </ul>
//           </nav>
//         </header>

//         <main>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vel
//           cum quibusdam mollitia vero temporibus itaque sed porro fugit tempora
//           natus, fugiat, aliquam repellendus, hic iusto. Eaque, cum minus
//           voluptatum consequuntur voluptates sapiente facilis commodi fugit quod
//           dolores vel nostrum obcaecati eveniet dolorum odio quas enim fuga
//           officiis libero dolore molestiae itaque facere quaerat quia? Neque
//           ratione modi magni nisi nam rem, quos deleniti, nulla doloremque saepe
//           architecto tempora itaque nostrum porro repudiandae laborum, autem
//           dicta provident dolor ab recusandae! Deserunt sed consequuntur
//           pariatur obcaecati deleniti tempore magni voluptate asperiores quae
//           non maiores distinctio perferendis, molestias hic mollitia. Quia
//           nostrum asperiores aliquid est, officia officiis quas autem rerum nonadipisci ad perferendis.
//           Autem incidunt expedita labore optio commodi. Perferendis dolorem odio
//           sint iusto? Facere accusamus ipsam eligendi maxime sapiente culpa
//           aperiam ratione. Tempora eveniet tenetur, suscipit fugiat adipisci
//           assumenda natus, rerum obcaecati culpa nihil qui omnis distinctio
//           ipsum iure necessitatibus nulla quod repudiandae accusamus in. Amet
//           harum facere tenetur natus ab quae sapiente vel molestiae, cum
//           similique consequatur consequuntur assumenda? Corrupti veritatis earum
//           illo dolorum consectetur itaque voluptate a minus blanditiis debitis
//           aspernatur sed rem ab iusto ex, dolores amet obcaecati et? Eum
//           mollitia quaerat incidunt numquam ut recusandae enim similique eos
//           iusto. Provident necessitatibus itaque quidem nihil, labore eius
//           voluptate consequuntur fugit explicabo, atque dolorum expedita iste.
//           Quibusdam similique nihil nisi ducimus eos ipsum harum perspiciatis
//           voluptate voluptatum temporibus architecto debitis voluptas amet
//           numquam natus earum commodi, voluptatem a incidunt. Adipisci enim ad
//           facilis laborum doloribus accusamus, nihil neque sapiente aliquam
//           voluptate ipsam atque ut eos. Eaque labore aut, provident ratione
//           ducimus voluptatum et doloribus, ipsum deleniti expedita voluptas.
//           Debitis a totam labore ex natus obcaecati sunt est accusantium,
//           necessitatibus distinctio, doloribus aut unde impedit harum. Eum
//           mollitia reprehenderit doloremque recusandae vitae repellendus
//           architecto. Harum voluptas magnam, molestias maiores praesentium
//           dolores quaerat ipsa consequatur? Quam iure ex eaque nobis temporibus
//           dolores id sint tempora voluptatem sequi? Soluta quibusdam rem dolore
//           nobis porro temporibus quis fugiat delectus voluptatem vero. Nobis
//           quaerat impedit omnis officiis! Consequatur ex numquam ea nesciunt
//         </main>

//         <footer>
//           &copy;
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut ad,
//             reiciendis cum, eveniet dolorem voluptate veniam nam inventore
//             architecto quasi sint accusamus, nihil eum neque aspernatur pariatur
//             cupiditate delectus?
//           </p>
//         </footer>
//       </>
//     );
//   }
// }

// class NavListItem extends React.Component {
//   render() {
//     return (
//       <li>
//         <a href="#">MenuElement</a>
//       </li>
//     );
//   }
// }

// ReactDOM.render(<Simpleton />, document.getElementById("root"));
