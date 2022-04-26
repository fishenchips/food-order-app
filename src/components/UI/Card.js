import React from "react";
import classes from "./Card.module.css";

//Wrapper that be used for any content
function Card(props) {
  //whatever is passed in the card, is used inside Card
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
