import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount?.toFixed(2);

  //used to render the order button
  const hasItems = cartCtx.items.length > 0;

  const handleRemoveFromCart = (item) => {};

  const handleAddFromCart = (item) => {};

  //dummy data
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {/* need to include .items, because thats the array */}
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          handleRemoveFromCart={() => handleRemoveFromCart(item.id)}
          handleAddFromCart={() => handleAddFromCart(item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          Close
        </button>
        {/* only render the button if there are items in the cart */}
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
