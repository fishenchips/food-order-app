import React from "react";
import classes from "./Input.module.css";

//need to wrap this component with forwardRef for it to work in MealItemForm.js
//add ref as a second argument
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* ...props.input lets us add more configuration elsewhere */}
    </div>
  );
});

export default Input;
