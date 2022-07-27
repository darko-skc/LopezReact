import './ItemCount.css'
import { useState } from 'react'

const ItemCount = () =>{
    const [amount, newamount] = useState(0)

    const amount_add = () =>{
       newamount(amount + 1)
    }

    const amount_subtract = () =>{
        newamount(amount -1)
    }

    return(
        <div className='ItemCount'>
            <span className='ItemCountAdd' onClick={amount_add}>+</span>
            <span className='ItemCountAmount'>{amount}</span>
            <span className='ItemCountSubtract' onClick={amount_subtract}>-</span>
        </div>
    )
}

export default ItemCount