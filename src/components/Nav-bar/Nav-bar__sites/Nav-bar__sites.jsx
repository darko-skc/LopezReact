import NavBarLinks from "../Nav-bar__links/Nav-bar__links"

import './Nav-bar__sites.css'

const NavBarSites = () =>{
    return(
        <div className="Nav-bar__sites"> 
            <NavBarLinks link='/store' name="Store"/>
            <NavBarLinks link="#" name="New Games"/>
            <NavBarLinks link="#" name="News"/>
            <NavBarLinks link="#" name="Community"/>
        </div>
    )
}

export default NavBarSites