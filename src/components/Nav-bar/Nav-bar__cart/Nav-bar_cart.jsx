import { BsFillCartFill} from 'react-icons/bs';
import Cart from '../../Cart/Cart';
import './Nav-bar_cart.css'
import { useState , useContext } from 'react';
import { CartContext } from '../../../context/CartContext';



const NavBarCart = () =>{
    const [ state, setState ] = useState(false)

    const {totalProduct} = useContext(CartContext)

    const stateModal = () =>{
        setState(!state)
    }

    return(
        <>
        <span className='cart-notifaction' data-before={totalProduct}><BsFillCartFill className='cart-icon' onClick={stateModal}></BsFillCartFill></span>
        {state && <Cart/>}
        </>
    )
}

export default NavBarCart