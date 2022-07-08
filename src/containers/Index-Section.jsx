import './Index-Section.css'
import add_cart_buttom from '../scripts/add_cart'



const IndexSection = () =>{
    return(
        <div className='Index-section'>
            <div className="Index-game" id='w'>
                <div className="Index-game__img">
                    <img src="https://img.hype.games/cdn/4fafabc9-6899-4efc-8018-412ef4332ed5COVER---[Ubisoft]-FAR-CRY-4-600.jpg" />
                </div>
            
                <div className="Index-game__box">
                    <div className="Index-game__info">
                        <h3 id="Index-game__name">FarCry 4</h3>
                    </div>
                    <div className="Index-game__cart">
                        <div className="Index-game__price"><p className="Index-game__text" id="Index-game__price">50</p></div>
                        <div className="Index-game__buttom" onClick={add_cart_buttom}><i id="Index-game__buttom" className="fa-solid fa-basket-shopping" data-id="1"></i></div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default IndexSection