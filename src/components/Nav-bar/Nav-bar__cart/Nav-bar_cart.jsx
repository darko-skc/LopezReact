import { BsFillCartFill} from 'react-icons/bs';
import Cart from '../../Cart/Cart';
import './Nav-bar_cart.css'

let state

const NavBarCart = () =>{
    return(
        <>
        <BsFillCartFill className='cart-icon'/>
        <Cart state={false}/>
        </>
    )
}

export default NavBarCart