import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsVaild] = useState(true);

  const amountInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //using refs to bind (also added a forwardRef in Input component)
    //refs use .current to reach value (value always a string)
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; //converts string to number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsVaild(false);
      return;
    }

    //only have access to ammount here so will need to get the rest (id etc) via props
    props.handleAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {/* if both are true this paragraph will show */}
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}

export default MealItemForm;
