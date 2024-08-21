import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";


const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idPlataform } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/items.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const filteredItems = idPlataform ? data.filter((i) => i.plataforma === idPlataform) : data;
        setItems(filteredItems);

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [idPlataform]);

  return (
    <div className="contenedor">
      <h1 className="greeting centered">{greeting}</h1>
      {loading ? <Spinner/> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;



