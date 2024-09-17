import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartProvider";
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react";

const ItemDetail = ({ item }) => {
  const {addItems} = useContext(CartContext)
  const [showItemCount, setShowItemCount] = useState(true)
  const onAdd = (cantidad) => {
    addItems(item, cantidad);
  };

  return (
    <div>
      <img src={item.imagen} alt={item.nombre} />
      <h2>{item.nombre}</h2>
      <p>{item.descripcion}</p>
      <p>${item.precio}</p>
      <p>Disponibles: {item.stock}</p>
      <p>Plataforma: {item.plataforma}</p>

      {showItemCount ? (
        <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
      ) : (
        <Link to="/Carrito">Finalizar Compra</Link>
      )}
    </div>
  );
};

export default ItemDetail;