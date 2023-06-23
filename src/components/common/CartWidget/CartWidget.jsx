import React from 'react';
import "./carrito.css"

const CartWidget = () => {

    return (
        <div style={{position: "relative"}}>
            <img style={{width:"40px"}} src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1686847897/carrito-de-compras_4_xaf7ei.png" alt="Carrito" />
            <div className='numeroCarrito'>0</div>
        </div>
    )
}

export default CartWidget