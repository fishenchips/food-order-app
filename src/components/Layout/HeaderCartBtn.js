import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartBtn.module.css";

function HeaderCartBtn(props) {
  const [btnHightlight, setBtnHightlight] = useState(false);

  //whenever CartContex changes, this component will be re-evaluated, which we do in the CartProvider.js
  const cartCtx = useContext(CartContext);

  //reduce transforms array to single value (2 arguments, function, and starting Value)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //destructuring to get to items so only items is a dependency is the useEffect and not whole cartCtx
  const { items } = cartCtx;

  //if btn is hightlighted (true) -> set add bump class
  //only wanna change if items change and length > 0
  const btnClasses = `${classes.button} ${btnHightlight ? classes.bump : ""}`;

  //Set a timer that removes bump class so it can play again
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHightlight(true);

    //removing class after a set timer so it can be added again
    const timer = setTimeout(() => {
      setBtnHightlight(false);
    }, 300);

    //return a cleanup function to clear timer
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.showCartHandler}>
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
