import "./App.css"
import MyNav from './components/Navbar/Navbar'
import ItemListContainer from "./components/ItemListConteiner/ItemListContainer";
import Container from 'react-bootstrap/Container';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error from "./components/Error/Error";



const App = () => {


  return (
    <>
      <BrowserRouter>

      <MyNav/>
      
      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>
         
        <Route path='/plataforma/:idPlataform' element={<ItemListContainer/>}/>

        <Route path='/item/:id' element={<ItemDetailContainer/>}/>

        <Route path='*' element={<Error/>}/>

      </Routes>




   
      </BrowserRouter>

        {/* <ItemListContainer greeting="¡Bienvenido a GameHive!" /> */}
      {/* <ItemDetailContainer/> */}
    
    
    </>
  );
}

export default App
