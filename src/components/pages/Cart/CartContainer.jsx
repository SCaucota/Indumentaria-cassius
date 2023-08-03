import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { CartContext } from '../../../context/CartContext';
import CounterContainer from '../../common/counter/CounterContainer';

const CartContainer = () => {

    const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);

    let totalPrice = getTotalPrice();

    return (
        <>
            <h3>Cart</h3>
            {
                cart.map((elemento) => {
                    return (
                        <div key={elemento.id}>
                            <h3>{elemento.title}</h3>
                            <h3>{elemento.price}</h3>
                            <span>{elemento.quantity}</span>
                            <Stack spacing={2} direction="row">
                                <Button onClick={() => deleteById(elemento.id)} variant="outlined">Eliminar</Button>
                            </Stack>
                        </div>
                    )
                })
            }
            <h3>TOTAL: ${totalPrice}</h3>
            <Stack spacing={2} direction="row">
                {
                    cart.length > 0 && (
                        <>
                            <Link to="/checkout">
                                <Button variant="outlined">Comprar</Button>
                            </Link>
                            <Button onClick={clearCart} variant="outlined">Cancelar compra</Button>
                        </>
                    )
                }
            </Stack>
        </>
    )
}

export default CartContainer