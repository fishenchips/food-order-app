import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartBtn.module.css";

function HeaderCartBtn() {
  return (
    <button className={classes.button}>
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
