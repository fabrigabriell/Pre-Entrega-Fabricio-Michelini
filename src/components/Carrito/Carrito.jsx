import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { Link } from 'react-router-dom';


const Carrito = () => {
  const { cart, removeItems, clearCart, getTotal } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <div>
        <h1>Carrito</h1>
        <p>Tu carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1>Carrito</h1>
      {cart.map(({ item, cantidad }) => (
        <div key={item.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <p>{item.nombre}</p>
          <p>Cantidad: {cantidad}</p>
          <p>Precio: ${item.precio}</p>
          <p>Total: ${item.precio * cantidad}</p>
          <button onClick={() => removeItems(item.id)}>Eliminar</button>
        </div>
      ))}
      <h2>Total: ${getTotal()}</h2>
      <button onClick={clearCart}>Vaciar Carrito</button>
      
      <Link to="/checkout">Comprar</Link>
    </div>
  );
};

export default Carrito;
