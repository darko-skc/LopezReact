import { useContext , useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './Cart.css'



const TemplateCart = ({img,name,price,amount,id}) =>{
    const {delItem} = useContext(CartContext)
    return(
        <>
        <div className='Template-cart'>
            <img className='Template-cart__img' src={img} alt="" />
            <div className='Template-cart__info'>
                <span className='Template-cart__name'>{name}</span>
                <span className='Template-cart__price'>{`$${price}`}</span>
            </div>
            <span className='Template-cart__amount'>{amount}</span>
            <div className='Template-cart__delete' onClick={() => delItem(id)}>  
                <i id="Card-game__buttom" className="fa-solid fa-trash" ></i>
            </div>
        </div>
        
        </>
    )
}



const Cart = () =>{
    
    const {cartList,totalPrice} = useContext(CartContext)


    
    if(cartList.length === 0){
        return(
        <div className="Cart">
            <h2>No tienes productos agregados</h2>
        </div>)
    }


    return(
        <>
            <div className="Cart">
                <div className='Cart-wid__container'>
                    {cartList.map((item)=>(
                    <TemplateCart id={item.id} key={item.id} name={item.name} img={item.frontpage_img} price={item.price_standard} amount={item.amount}></TemplateCart>
                    ))}
                </div>
                <div className='Template-cart__total'>
                    <span>Total</span>
                    <span>{`$${totalPrice}`}</span>
                </div>
                <div className='Template-cart__button'>
                    <Link to={'/cart'}><span>Ir al carrito</span></Link>
                </div>
            </div>
            
        </>
    )
    }

export default Cart