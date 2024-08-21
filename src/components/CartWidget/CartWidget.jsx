import { TiShoppingCart } from "react-icons/ti";
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="CartWidget">
        <p>0</p>
        <TiShoppingCart/>
    </div>
  )
}

export default CartWidget