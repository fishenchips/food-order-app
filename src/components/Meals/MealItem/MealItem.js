import React from "react";
import classes from "./MealItem.module.css";

function MealItem(props) {
  //formatting price and then using it below
  const price = `$${props.price.toFixed(2)}`;

  //imported into ul
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
}

export default MealItem;
