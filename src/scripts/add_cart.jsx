let cart = []

const add_cart_buttom = (e) =>{
    const template = e.target.parentElement.parentElement
    add_cart(template)
    console.log(cart)
}

const add_cart = (e) =>{
    const name = document.getElementById('Index-game__name').textContent
    const price = document.getElementById('Index-game__price').textContent
    const add_game = {
        id : 1,
        name : name,
        price : price,
        cantidad : 1,
    }
    cart.hasOwnProperty(add_game.id) && (add_game.cantidad = cart[add_game.id].cantidad + 1)
    cart[add_game.id] = {...add_game}
    return cart
}

export default add_cart_buttom
