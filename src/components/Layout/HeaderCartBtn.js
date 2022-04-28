import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartBtn.module.css";

function HeaderCartBtn(props) {
  return (
    <button className={classes.button} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        {/* Importing svg code in this span tag */}
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartBtn;
