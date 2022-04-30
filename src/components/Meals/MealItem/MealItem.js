import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  //formatting price and then using it below
  const price = `$${props.price.toFixed(2)}`;

  //will be sent down to MealItemForm
  const handleAddToCart = (amount) => {
    //addItem() from CartProvider.js, a property poiting at addItemToCartHandler() to add items to cart
    //which expects to get an item argument that will be forwarded to the reducer hook
    cartCtx.addItem({
      //sent down from AvailableMeals.js
      id: props.id,
      name: props.name,
      amount: amount, // points at the argument
      price: props.price,
    });
  };

  //imported into ul
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {/* sending down id to make all input fields unique */}
        <MealItemForm id={props.id} handleAddToCart={handleAddToCart} />
      </div>
    </li>
  );
}

export default MealItem;
