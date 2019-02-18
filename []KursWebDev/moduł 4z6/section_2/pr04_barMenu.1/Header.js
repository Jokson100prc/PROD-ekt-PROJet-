const Header = props => {
  const activeItem = props.items.filter(item => item.active);

  const number = activeItem.length;

  return (
    <>
      <h1>Order summary:</h1>
      <h2>Order size {number}</h2>
      <h2>
        To pay{" "}
        {number > 0
          ? `${number * 10} `
          : "\"If Your order is empty we wouldn't Your "}{" "}
        &euro;
        {number > 0 ? "" : `" ;-)`}
      </h2>
    </>
  );
};
