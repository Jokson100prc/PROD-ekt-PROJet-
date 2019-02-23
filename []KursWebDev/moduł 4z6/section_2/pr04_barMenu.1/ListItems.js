const ListItems = props => {
  const items = props.items.map(item => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      value={item.value}
      active={item.active}
      handleActive={props.handleActive}
    />
  ));

  return (
    <div>
      <h1>Your order:</h1>
      <ul>{items}</ul>
    </div>
  );
};
