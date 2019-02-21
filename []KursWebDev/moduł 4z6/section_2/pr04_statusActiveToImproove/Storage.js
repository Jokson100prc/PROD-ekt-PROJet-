const Storage = props => {
  const items = props.storageList.map(item => (
    <Item key={item.id} name={item.name} pts={item.pts} actv={props.active} />
  ));
  return <>{items}</>;
};
