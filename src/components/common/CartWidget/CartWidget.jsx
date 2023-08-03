import React, { useContext } from 'react';
import "./cartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from '../../../context/CartContext';


const CartWidget = () => {

    const {getTotalQuantity} = useContext(CartContext);

    let total = getTotalQuantity()

    return (
        <Link to="/cart">
            <div style={{position: "relative"}}>
                <img style={{width:"40px"}} src="https://res.cloudinary.com/dcwuqrvuv/image/upload/v1686847897/carrito-de-compras_4_xaf7ei.png" alt="Carrito" />
                <div className='numeroCarrito'>{total}</div>
            </div>
        </Link>
    )
}

export default CartWidget