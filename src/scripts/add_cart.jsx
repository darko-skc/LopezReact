let cart = []

const add_cart_buttom = (e) =>{
    const template = e.target.parentElement.parentElement
    add_cart(template)
    console.log(cart)
}

const add_cart = (e) =>{
    const name = document.getElementById('Index-game__name').textContent
    const price = document.getElementById('Index-game__price').textContent
    const id = document.getElementById('Index-game__buttom').dataset.id
    const add_game = {
        id : id,
        name : name,
        price : price,
        amount : 1,
    }
    cart.hasOwnProperty(add_game.id) && (add_game.amount = cart[add_game.id].amount + 1)
    cart[add_game.id] = {...add_game}
    return cart
}

export default add_cart_buttom