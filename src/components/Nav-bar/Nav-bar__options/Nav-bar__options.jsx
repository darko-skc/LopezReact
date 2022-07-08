
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { VscBell } from 'react-icons/vsc';
import { VscBellDot } from 'react-icons/vsc';
import './Nav-bar__options.css'
import NavBarAccount from '../Nav-bar__account/Nav-bar__account';
import NavBarCart from '../Nav-bar__cart/Nav-bar_cart';

const NavBarOptions = () =>{
    return(
        <div className="Nav-bar__options">
            <VscBell />
            <AiOutlineHeart />
            <NavBarCart />
            <NavBarAccount/>
        </div>
    )
}

export default NavBarOptions