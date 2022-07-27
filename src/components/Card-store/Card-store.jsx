import { Link } from 'react-router-dom'
import './Card-store.css'

const CardStore  = ({img,id,brief,name,price}) =>{
    return(
        
        <div className='CardStore'>
            <Link to={`/detail/${id}`}>
            <img src={img}/>
            <div className='CardStoreInfo'>
                <div className='CardStoreNameBox'>
                    <p>{brief}</p>
                    <span className='CardStoreName'>
                        {name}
                    </span>
                </div>
                <div className='CardStorePriceBox'>
                    
                    <span className='CardStorePrice'>{price}</span>
                </div>
            </div>
            </Link>
        </div>
        
    )
}

export default CardStore 