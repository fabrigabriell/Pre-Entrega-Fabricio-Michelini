import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext/CartProvider"
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from "firebase/firestore"

const Compra = () => {
  const {cart, getTotal, getTotalProducts, clearCart} = 
  useContext(CartContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    

    if(!nombre || !apellido || !telefono || !email){
      setError("Por favor complete los campos")
    return;
    }

    const db = getFirestore();

    const order = {
      items: cart.map((Item) =>({
        id: Item.item.id,
        nombre: Item.item.nombre,
        cantidad: Item.cantidad
      })),
      total: getTotal(),
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email
    };

    Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db, "item", productOrder.id);
        const productDoc = await getDoc(productRef);
        const stock = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: stock - productOrder.cantidad
        })
      })
    ).then(() => {
      addDoc(collection(db, "orders"), order)
      .then((docRef) => {
        setOrderId(docRef.id);
        clearCart();
      })
      .catch((error) => {
        console.log("Error al añadir el documento: ", error);
        setError("Error al generar la orden de compra, por favor intentelo de nuevo");
      })
    })
    .catch((error) => {
      console.log("Error actualizando stock", error);
      setError("No se puede actualizar el stock, por favor intentelo de nuevo")
    })
  };

  console.log(cart);
  return (
    <div>
      <h2>Ingrese sus Datos</h2>

      <div>
      {cart.map((Item) => (
          <div key={Item.item.id}>
            <p>{"" } {Item.item.nombre}</p>
            <p>{Item.item.precio}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="">Apellido</label>
          <input type="text" onChange={(e)=> setApellido(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="">Numero de Telefono </label>
          <input type="number" onChange={(e)=> setTelefono(e.target.value)}/>
        </div>

        <button type="submit">Comprar</button>

        {error && <p>{error}</p>}

        {orderId && (
          <p>¡Gracias por Confiar en nosotros! El numero de order es: {orderId} 
          {""} 
          </p>
        )
        }
      </form>
    </div>
  )
}

export default Compra
