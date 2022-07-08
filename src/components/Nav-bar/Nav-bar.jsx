import './Nav-bar.css'
import NavBarSites from './Nav-bar__sites/Nav-bar__sites'
import NavBarSearch from './Nav-bar__search/Nav-bar__search'
import NavBarOptions from './Nav-bar__options/Nav-bar__options'

const NavBar = () =>{
    return(
        <div className='Nav-bar'>
            <NavBarSites/>
            <NavBarSearch/>
            <NavBarOptions/>
        </div>
    )
}

export default NavBar