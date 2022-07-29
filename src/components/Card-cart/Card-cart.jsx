import './Card-cart.css'

const CardCart = ({item}) =>{
    
    return(
        <div className="CardCart">
            <h2>Nombre : {item.name}</h2>
            <h2>Precio : {item.price_standard}</h2>
            <h2>Cantidad : {item.amount}</h2>
        </div>
    )
}

export default CardCart