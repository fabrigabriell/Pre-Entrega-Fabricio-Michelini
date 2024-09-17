import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idPlataform } = useParams();

  useEffect(() => {
    
    setLoading(true)

    const db = getFirestore();

    const myProduct = idPlataform ? query(collection(db, "item"), where("plataforma","==",idPlataform))
    : collection(db, "item")

    getDocs(myProduct).then((res)=> {
      const newProduct = res.docs.map((doc)=> {
        const data = doc.data();
        return {id : doc.id, ...data };
      });
      setItems(newProduct);
    })
    .catch((error)=> console.log("Error searching items", error))
    .finally(() => setLoading(false));
  }, [idPlataform]);

  return (
    <div className="contenedor">
      <h1 className="greeting centered">{greeting}</h1>
      {loading ? <Spinner/> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;



