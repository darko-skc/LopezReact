import './Card-store.css'

const CardStore  = ({img,brief,name,price}) =>{
    return(
        <div className='CardStore'>
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
        </div>
    )
}

export default CardStore 