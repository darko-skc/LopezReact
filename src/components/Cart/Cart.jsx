import './Cart.css'
import { useState } from 'react'

const TemplateCart = (props) =>{
    const [amount, newamount] = useState(parseInt(props.amount))
    let price = props.price
    
    const amount_add = () =>{
        newamount(amount + 1)
    }

    const amount_subtract = () =>{
        
        newamount(amount - 1)
    }

    return(
        <>
        <div className='Template-cart'>
            <img className='Template-cart__img' src="../../image/farcry4/frontpage.jpeg" alt="" />
            <div className='Template-cart__info'>
                <span className='Template-cart__name'>FarCry4</span>
                <span className='Template-cart__price'>{props.price}</span>
            </div>
            <div className='Template-cart__amountbox'>
                <span className='Template-cart__add' onClick={amount_add}>+</span>
                <span className='Template-cart__amount'>{amount}</span>
                <span className='Template-cart__subtract' onClick={amount_subtract}>-</span>
            </div>
        </div>
        <div className='Template-cart__total'>
            <span>Total</span>
            <span>{price}</span>
        </div>
        </>
    )
}



const Cart = ({state}) =>{
    if(state){
        return(
            <>
                <div className="Cart">
                   <TemplateCart amount='1' price='50'></TemplateCart>
                </div>
            </>
        )
    }
}

export default Cart