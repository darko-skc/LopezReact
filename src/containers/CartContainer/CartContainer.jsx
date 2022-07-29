import { useContext } from "react"
import CardCart from "../../components/Card-cart/Card-cart"
import { CartContext } from "../../context/CartContext"

import './CartContainer.css'

const  CartContainer = () =>{
    
    const {cartList,delCart} = useContext(CartContext)

    console.log(cartList)

    return (
        <div className="CartContainer">
            {
                cartList.map(item =>(
                   <CardCart key={item.id} item={item}></CardCart>
                ))
            }
            <button onClick={delCart}>BORRAR CARRITO</button>
        </div>
    )
}

export default CartContainer