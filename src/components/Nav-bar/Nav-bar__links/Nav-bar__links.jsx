import './Nav-bar__links.css'

const NavBarLinks = (props) =>{
    return (
        <li className="Nav-bar__link"><a href={`${props.link}`}>{`${props.name}`}</a></li>
    )
}

export default NavBarLinks