import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();


    useEffect(() => {
        const db = getFirestore();



        const newDoc = doc(db, "item", id)

        getDoc(newDoc)
        .then(res => {
            const data = res.data();
            const newProduct = {id: res.id, ...data};
            setItem(newProduct);
        })
    }, [id]);

    return (
        <div>
            {item == undefined ? <Spinner/> : <ItemDetail item={item}/> }
        </div>
    );
};

export default ItemDetailContainer;

