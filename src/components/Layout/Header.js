import React from "react";
//importing local image
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

function Header() {
  return (
    //used as a wrapper
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Food" />
      </div>
    </React.Fragment>
  );
}
export default Header;
