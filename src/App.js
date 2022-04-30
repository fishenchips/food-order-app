import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  //hook to show/hide the cart
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
    console.log(showCart);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    //Cart, Header and Meals all need access to the CartProvider
    <CartProvider>
      {/* Both below need to be true for cart to show */}
      {showCart && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
