import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    const {id} = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/items.json');
                const data = await response.json();
                const newItem = data.find(i => i.id == id);
                setItem(newItem);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {item == undefined ? <Spinner/> : <ItemDetail item={item}/> }
        </div>
    );
};

export default ItemDetailContainer;

