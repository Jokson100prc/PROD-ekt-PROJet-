const ListItems = props => {
  const items = props.items.map(item => (
    <Item
      key={item.id}
      name={item.name}
      value={item.value}
      active={item.active}
    />
  ));
  console.log(items);
  return (
    <div>
      <h1>Your order:</h1>
      <ul>{items}</ul>
    </div>
  );
};
