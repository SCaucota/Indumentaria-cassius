import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { CartContext } from '../../../context/CartContext';
import CounterContainer from '../../common/counter/CounterContainer';
import "./cart.css"

const CartContainer = () => {

    const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);

    let totalPrice = getTotalPrice();

    return (
        <div className='cartContainer'>
            <h1>CARRITO</h1>
            <hr />
            <div className='productsTotal'>
                <div className='articulos'>
                    {
                        cart.length === 0
                        ? <h2>No hay productos agregados</h2>
                        : cart.map((elemento) => {
                            return (
                                <div className='dataArticulos' key={elemento.id}>
                                    <div className='imgTitle'>
                                        <img style={{width: "70px", height: "70px", paddingRight: "10px"}} src={elemento.img} alt="" />
                                        <h3>{elemento.title}</h3>
                                    </div>
                                    <h3>Cantidad: {elemento.quantity}</h3>
                                    <h3>Precio: ${elemento.price}</h3>
                                    <Stack spacing={2} direction="row">
                                        <Button className='bottonStyle' onClick={() => deleteById(elemento.id)} variant="outlined">Eliminar</Button>
                                    </Stack>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='totalCancel'>
                    <div className='total'>
                        <h3>TOTAL:</h3>
                        <h3>${totalPrice}</h3>
                    </div>
                    <Stack spacing={2} direction="row">
                        {
                            cart.length > 0 && (
                                <>
                                    <Link to="/checkout">
                                        <Button className='bottonStyle' variant="outlined">Comprar</Button>
                                    </Link>
                                    <Button className='bottonStyle' onClick={clearCart} variant="outlined">Cancelar compra</Button>
                                </>
                            )
                        }
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default CartContainer