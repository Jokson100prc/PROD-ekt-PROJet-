const Item = props => {
  const li = (
    <li
      style={props.active ? { fontWeight: "bold" } : { color: "gray" }}
      onClick={() => props.handleActive(props.id)}
    >
      {props.name}
    </li>
  );
  return <>{li}</>;
};
