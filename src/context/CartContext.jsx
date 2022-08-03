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

    const delItem = (id) =>{
        setCartList(cartList.filter((item) => item.id != id))
    }

    
    let totalPrice = cartList.reduce((acc , item) =>{
            return acc += (parseFloat(item.amount) * parseFloat(item.price_standard))
    }, 0)

    let totalProduct = cartList.reduce((acc , item) =>{
        return acc += (parseInt(item.amount))
    }, 0)

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            delCart,
            delItem,
            totalPrice,
            totalProduct
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
