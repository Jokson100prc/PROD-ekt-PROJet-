const Item = props => {
  return (
    <>
      <li
        style={props.pts > 0 ? { backgroundColor: "#ccc" } : { color: "grey" }}
        onClick={() => props.activeIsTrue(props.id)}
      >
        {props.name}
      </li>
    </>
  );
};
