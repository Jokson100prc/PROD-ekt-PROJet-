const Item = props => {
  const li = (
    <li
      className={props.active ? "enabled" : "disabled"}
      onClick={() => props.handleActive(props.id)}
    >
      {props.name}
    </li>
  );
  return <>{li}</>;
};

// style={props.active ? { fontWeight: "bold" } : { color: "gray" }}
