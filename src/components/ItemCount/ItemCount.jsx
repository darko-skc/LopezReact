import './ItemCount.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({onAdd}) =>{
    const [buttonType, setButtonType] = useState('buy')
 
    const addCartLink = () =>{
        setButtonType('cart')
    }

    const [amount, newamount] = useState(0)

    const amount_add = () =>{
       newamount(amount + 1)
    }

    const amount_subtract = () =>{
        newamount(amount -1)
    }

    const BuyButton = ({changeButton}) =>{
        return (
            <div className='Card-detail__info__buttom' onClick={()=> {
                onAdd(amount);
                changeButton();
            } }>BUY</div>
        )
    }
    return(
        <div className='ItemCount'>
            <span className='ItemCountAdd' onClick={amount_add}>+</span>
            <span className='ItemCountAmount'>{amount}</span>
            <span className='ItemCountSubtract' onClick={amount_subtract}>-</span>
            {
           
            buttonType === 'buy' ?
                <BuyButton changeButton={addCartLink}/>
            :
                <>
                    <div className='Card-detail__info__buttom'><Link to={'/cart'} className="CartLink">CARRITO</Link></div>
                    <div className='Card-detail__info__buttom'><Link to={'/store'} className="CartLink">comprar mas</Link></div>
                </>
            }

        </div>
        
    )
}

export default ItemCount