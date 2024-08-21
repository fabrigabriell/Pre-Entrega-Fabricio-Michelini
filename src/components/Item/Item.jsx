import "./Item.css"
import { Link } from "react-router-dom";



const Item = ({ item }) => (
    <Link to={`/item/${item.id}`}>
    <div key={item.id} className="card">
      <img src={item.imagen} alt={item.nombre} />
      <h2>{item.nombre}</h2>
    </div>
    </Link>
  );
  
  export default Item;
  

