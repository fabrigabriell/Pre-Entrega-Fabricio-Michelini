import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ item }) => {
  return (
    <div>
        <img src={item.imagen} alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>${item.precio}</p>
        <p>Disonibles: {item.stock}</p>
        <p>Plataforma: {item.plataforma}</p>

      <ItemCount initial={1} stock={item.stock}/>

    </div>
  )
}

export default ItemDetail