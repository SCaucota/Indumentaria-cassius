import { ProductionQuantityLimits } from "@mui/icons-material";
import React, { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextComponent = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (product) => {

        let productSameId = cart.some((elemento) => elemento.id == product.id)

        if (productSameId) {
            let sinRepetidos = cart.map(elemento => {
                if(elemento.id === product.id) {
                    return {...elemento, quantity: product.quantity}
                }else{
                    return elemento
                }
            })

            setCart(sinRepetidos)

        } else {
            setCart([...cart, product])
        }

    };

    const clearCart = () => {
        setCart([])
    };

    const deleteById = (id) => {
        let newCart = cart.filter((elemento) => elemento.id !== id)
        setCart(newCart)
    };

    const getTotalQuantity = () => {
        
        let total = cart.reduce((acumulador, elemento) => {
            return acumulador + elemento.quantity
        }, 0)

        return total
    };

    const getTotalPrice = () => {
        let total = cart.reduce((acumulador, elemento) => {
            return acumulador + (elemento.price * elemento.quantity)
        }, 0)
        
        return total
    };

    const getQuantityById = (id) => {

        let product = cart.find((elemento) => elemento.id === +id)
        
        return product?.quantity
    };

    let data = {
        cart,
        addToCart,
        clearCart,
        deleteById,
        getTotalQuantity,
        getTotalPrice,
        getQuantityById
    };

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextComponent