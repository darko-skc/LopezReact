import './Nav-bar__account.css'
import { AiFillCaretDown } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';


const NavBarAccount = () =>{
    return(
        <div className="Nav-bar__account">
            <div>
                <span>User</span>
                <AiFillCaretDown/>
            </div>
            <FaRegUser />
        </div>
    )
}

export default NavBarAccount