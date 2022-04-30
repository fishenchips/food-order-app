import React, { useReducer } from "react";
import CartContext from "./cart-context";

//starting value of cart, which we return as state in cartReducer
const defaultCartState = {
  items: [],
  totalAmout: 0,
};

//outside component function, doesnt need any data inside and should be recreated
// state stored the previous values, action is used to change
const cartReducer = (state, action) => {
  //useReducer hook in addItemToCartHandler
  if (action.type === "ADD") {
    //adds a new array
    const updatedItem = state.items.concat(action.item);
    const updatedTotalAmout =
      state.totalAmout + action.item.price * action.item.amount;

    return {
      items: updatedItem,
      totalAmout: updatedTotalAmout,
    };
  }
  return defaultCartState;
};

//manage cart context data, and then provide it to all components that want access to it
function CartProvider(props) {
  // can use cartState below instead of hard coding values.
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  //this will be updated over time - so this wraps the content that needs access to the object
  const cartContext = {
    items: cartState.items,
    totalAmout: cartState.totalAmout,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {/* Because of props.children, we can wrap any compontent that will use this context */}
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
