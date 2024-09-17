import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItems = (item, cantidad) => {
    if (cantidad > item.stock) {
      alert("No puedes agregar más de la cantidad disponible en stock.");
      return;
    }

    const itemIndex = cart.findIndex(cartItem => cartItem.item.id === item.id);

    if (itemIndex > -1) {
      const newCart = [...cart];
      const newCantidad = Math.min(newCart[itemIndex].cantidad + cantidad, item.stock);
      newCart[itemIndex].cantidad = newCantidad;
      setCart(newCart);
    } else {
      setCart([...cart, { item, cantidad }]);
    }
  };

  const isInCart = (id) => {
    return cart.some(({ item }) => item.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, { item, cantidad }) => total + item.precio * cantidad, 0);
  };

  const getTotalProducts = () => {
    return cart.reduce((total, { cantidad }) => total + cantidad, 0);
  };

  const removeItems = (id) => {
    setCart(cart.filter(({ item }) => item.id !== id));
  };

  const buy = () => {
    if (cart.length > 0) {
      console.log("Compra realizada exitosamente");
      clearCart();
    } else {
      console.log("El carrito está vacío");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItems,
        isInCart,
        clearCart,
        getTotal,
        getTotalProducts,
        removeItems,
        buy,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
