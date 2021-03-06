import React from "react";
//importing local image
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartBtn from "./HeaderCartBtn";

function Header(props) {
  return (
    //used as a wrapper
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartBtn showCartHandler={props.showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Food" />
      </div>
    </React.Fragment>
  );
}
export default Header;
