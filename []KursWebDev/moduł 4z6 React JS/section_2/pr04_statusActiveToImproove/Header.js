const Header = props => {
  return (
    <div>
      <h1>Your order</h1>
      <h2>Elements: {props.storageList.length}</h2>
      <h3>To pay: {props.storageList.length * 15}</h3>
    </div>
  );
};
