import './Card-user.css'
import add_cart_buttom from '../../scripts/add_cart'



const CardUser = ({id,name,img,price}) =>{
    return(
        <div className='Index-section'>
            <div className="Index-game" id='w'>
                <div className="Index-game__img">
                    <img src={img} />
                </div>
            
                <div className="Index-game__box">
                    <div className="Index-game__info">
                        <h3 id="Index-game__name">{name}</h3>
                    </div>
                    <div className="Index-game__cart">
                        <div className="Index-game__price"><p className="Index-game__text" id="Index-game__price">{price}</p></div>
                        <div className="Index-game__buttom" onClick={add_cart_buttom}><i id="Index-game__buttom" className="fa-solid fa-basket-shopping" data-id={id}></i></div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default CardUser