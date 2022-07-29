import { useState, createContext} from "react";

export const CartContext = createContext([])


const CartContextProvider = ({children}) =>{
    
    const [cartList, setCartList] = useState([])

    const addToCart = (product) =>{
        setCartList([...cartList, product])
    }

    const delCart = () =>{
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            delCart
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
