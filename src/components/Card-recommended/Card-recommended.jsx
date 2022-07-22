import './Card-recommended.css'
import { Link } from 'react-router-dom'



const CardRecommended = ({id,name,img,price}) =>{
    return(
        <div className='Card-section'>
            <div className="Card-game" id='w'>
                <Link to={`/detail/${id}`}>
                    <div className="Card-game__img">
                        <img src={img} />
                    </div>
                </Link>
            
                <div className="Card-game__box">
                    <Link to={`/detail/${id}`}>
                    <div className="Card-game__info">
                        <h3 id="Card-game__name">{name}</h3>
                    </div>
                    </Link>
                    <div className="Card-game__cart">
                        <div className="Card-game__price"><p className="Card-game__text" id="Card-game__price">{price}</p></div>
                        <div className="Card-game__buttom"><i id="Card-game__buttom" className="fa-solid fa-basket-shopping" data-id={id}></i></div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default CardRecommended