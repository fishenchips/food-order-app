import React, { useReducer } from "react";
import CartContext from "./cart-context";

//starting value of cart, which we return as state in cartReducer
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//outside component function, doesnt need any data inside and should be recreated
// state stored the previous values, action is used to change
const cartReducer = (state, action) => {
  //useReducer hook in addItemToCartHandler
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //want to check if an item is already part of the array
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    //get existing cartItem thru above index - works only if we already have it
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //update items with new array
      updatedItems = [...state.items];
      //overwrite old item with the updated item
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //item added for the first time
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item); //adds a new array
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  //removing items
  if (action.type === "REMOVE") {
    const existsCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existsCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    //removing last item (amount: 1)
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      //overwrite the old item with the updated
      updatedItems[existsCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
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
    totalAmount: cartState.totalAmount,
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
