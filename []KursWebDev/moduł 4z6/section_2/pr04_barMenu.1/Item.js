const Item = props => {
  const li = (
    <li style={props.active ? { fontWeight: "bold" } : { color: "gray" }}>
      {props.name}
    </li>
  );
  return <>{li}</>;
};
