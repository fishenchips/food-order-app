import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartBtn.module.css";

function HeaderCartBtn(props) {
  //whenever CartContex changes, this component will be re-evaluated, which we do in the CartProvider.js
  const cartCtx = useContext(CartContext);

  //reduce transforms array to single value (2 arguments, function, and starting Value)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        {/* Importing svg code in this span tag */}
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartBtn;
