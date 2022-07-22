import './Side-bar__logo.css'
import { NavLink } from 'react-router-dom'
const SideBarLogo = ()=>{
    return (
        <div className='Side-bar__logo'>
            <NavLink to={'/'}><i className='fa-solid fa-gamepad'></i></NavLink>
        </div>
    )
}

export default SideBarLogo