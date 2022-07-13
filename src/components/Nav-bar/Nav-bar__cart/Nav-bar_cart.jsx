import { BsFillCartFill} from 'react-icons/bs';
import Cart from '../../Cart/Cart';
import './Nav-bar_cart.css'
import { useState } from 'react';



const NavBarCart = () =>{
    const [ state, setState ] = useState(false)

    const stateModal = () =>{
        if(state === false){
            setState(true)
        } else {
            setState(false)
        }
    }

    return(
        <>
        <BsFillCartFill className='cart-icon' onClick={stateModal}></BsFillCartFill>
        <Cart state={state}></Cart>
        </>
    )
}

export default NavBarCart