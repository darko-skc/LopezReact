import './Card-recommended.css'
import add_cart_buttom from '../../scripts/add_cart'



const CardRecommended = ({id,name,img,price}) =>{
    return(
        <div className='Card-section'>
            <div className="Card-game" id='w'>
                <div className="Card-game__img">
                    <img src={img} />
                </div>
            
                <div className="Card-game__box">
                    <div className="Card-game__info">
                        <h3 id="Card-game__name">{name}</h3>
                    </div>
                    <div className="Card-game__cart">
                        <div className="Card-game__price"><p className="Card-game__text" id="Card-game__price">{price}</p></div>
                        <div className="Card-game__buttom" onClick={add_cart_buttom}><i id="Card-game__buttom" className="fa-solid fa-basket-shopping" data-id={id}></i></div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default CardRecommended