import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartProvider';
import { TiShoppingCart } from 'react-icons/ti';
import './CartWidget.css';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalProducts = () => {
    return cart.reduce((acc, { cantidad }) => acc + cantidad, 0);
  };

  const handleCartClick = () => {
    navigate('/Carrito');
  };

  return (
    <div className="CartWidget" onClick={handleCartClick} style={{ cursor: 'pointer' }}>
      <p>{getTotalProducts()}</p>
      <TiShoppingCart />
    </div>
  );
};

export default CartWidget;
