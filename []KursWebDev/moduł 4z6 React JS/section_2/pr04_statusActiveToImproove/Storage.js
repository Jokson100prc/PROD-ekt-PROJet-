const Storage = props => {
  const items = props.storageList.map(item => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      pts={item.pts}
      activeIsTrue={props.activeIsTrue}
    />
  ));
  return <>{items}</>;
};
