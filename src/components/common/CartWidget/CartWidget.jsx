import React from 'react';
import "./carrito.css"
import { Link } from "react-router-dom"

const CartWidget = () => {

    return (
        <Link to="/cart">
            <div style={{position: "relative"}}>
                <img style={{width:"40px"}} src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1686847897/carrito-de-compras_4_xaf7ei.png" alt="Carrito" />
                <div className='numeroCarrito'>0</div>
            </div>
        </Link>
    )
}

export default CartWidget