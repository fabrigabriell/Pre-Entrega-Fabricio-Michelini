import "./App.css"
import { useState, useEffect } from "react";
import MyNav from './components/Navbar/Navbar'
import ItemListContainer from "./components/ItemListConteiner/ItemListContainer";
import Container from 'react-bootstrap/Container';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error from "./components/Error/Error";
import ThemeProvider from "./context/ThemeContext/ThemeProvider";
import CartProvider from "./context/CartContext/CartProvider";
import Carrito from "./components/Carrito/Carrito";
import { db } from "./main";
import { getFirestore, collection, getDocs, doc, query, where } from "firebase/firestore";
import Compra from "./components/checkout/Compra";


const App = () => {

  const [item, setItem] = useState([]);

  useEffect(() =>{
    const db = getFirestore();

    const itemsCollection = collection(db, "item")
    
    getDocs(itemsCollection).then((snapshot) =>{
      setItem(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()
    })));
    })
  }, [])

  return (
    <>
    <ThemeProvider>
      <CartProvider>

      <BrowserRouter>

      <MyNav/>
      
      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>
         
        <Route path='/plataforma/:idPlataform' element={<ItemListContainer/>}/>

        <Route path='/item/:id' element={<ItemDetailContainer/>}/>

        <Route path='/Carrito' element={<Carrito/>}/> 

        <Route path='/Checkout' element={<Compra/>}/>

        <Route path='*' element={<Error/>}/>

      </Routes>




   
      </BrowserRouter>

      </CartProvider>
      </ThemeProvider>
    
    </>
  );
}

export default App
