import './Nav-bar__links.css'
import { NavLink } from 'react-router-dom'
const NavBarLinks = ({link,name}) =>{
    return (
        <li className="Nav-bar__link"><NavLink to={link}>{name}</NavLink></li>

    )
}

export default NavBarLinks