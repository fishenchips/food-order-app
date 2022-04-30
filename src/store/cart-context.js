import React from "react";

//adding data for easier auto completion later, wont actually use it here, just need to be an object
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
