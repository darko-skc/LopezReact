import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

import ItemCount from '../ItemCount/ItemCount'
import './Card-detail.css'

const CardDetail = ({product}) =>{

    const {addToCart, cartList} = useContext(CartContext)
    const onAdd = (count) => {
        
        let repeat = cartList.find(el => el.id === product.id)
        
        if (repeat){
            count += repeat.amount
            cartList[repeat.id].amount = count
        } else {
            addToCart({ ...product, amount: count})
        }  
        
    }

    console.log(cartList)

    return(
        <div className="Card-detail">
            <div className="Card-detail__title">
                <div className="Card-detail__title_img">
                    <img src={product.frontpage_img} alt="" />
                </div>
                <div className='Card-detail__box'>
                    <div className="Card-detail__title_name">
                        <h2>{product.name}</h2>
                    </div>
                    <div className="Card-detail__title_platform">
                        <span>Steam</span>
                        <span>Windows</span>
                    </div>
                </div>
            </div>
            <div className='Card-detail__content'>
                <div className="Card-detail__media">
                    <iframe width="560" height="315" src={product.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="Card-detail__img">
                        <img src="/image/farcry6/gameplay1.jpeg" alt="" />
                        <img src="/image/farcry6/gameplay2.jpeg" alt="" />
                        <img src="/image/farcry6/gameplay3.webp" alt="" />
                    </div>
                </div>
                <div className="Card-detail__info">
                    <h2>{product.name}</h2>
                    <span>{product.price_standard}</span>
                    <span>Activation: Steam</span>
                    <span>Product activated by <a href="">activation key</a></span>
                    <ItemCount onAdd={onAdd}/>  
                </div>
            </div>
        </div>
    )
}

export default CardDetail