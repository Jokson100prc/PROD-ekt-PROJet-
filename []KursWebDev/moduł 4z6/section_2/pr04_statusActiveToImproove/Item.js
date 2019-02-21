const Item = props => {
  return (
    <>
      <li
        style={props.pts > 0 ? { backgroundColor: "#ccc" } : { color: "grey" }}
      >
        {props.name}
      </li>
    </>
  );
};
