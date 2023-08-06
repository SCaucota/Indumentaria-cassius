import React, { createContext, useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

export const CartContext = createContext()

const CartContextComponent = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    const addToCart = (product) => {

        let productSameId = cart.some((elemento) => elemento.id == product.id)

        if (productSameId) {
            let sinRepetidos = cart.map(elemento => {
                if (elemento.id === product.id) {
                    return { ...elemento, quantity: product.quantity }
                } else {
                    return elemento
                }
            })

            localStorage.setItem("cart", JSON.stringify(sinRepetidos))
            setCart(sinRepetidos)

        } else {
            localStorage.setItem("cart", JSON.stringify([...cart, product]))
            setCart([...cart, product])
        }

    };

    const clearCart = () => {
        Swal.fire({
            title: '¿Desea elminar el carrito?',
            text: "No podra recuperar los productos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonText: "Cancelar",
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {

                localStorage.removeItem("cart");

                setCart([])

                Swal.fire(
                    'Cancelación exitosa',
                    'El carrito se encuentra vacío',
                    'success'
                )
            }
        })

    };

    const deleteById = (id) => {

        Swal.fire({
            title: '¿Estás seguro/a que deseas elminar este producto?',
            text: "No podrás recuperarlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonText: "Cancelar",
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                let newCart = cart.filter((elemento) => elemento.id !== id)

                localStorage.setItem("cart", JSON.stringify(newCart))

                setCart(newCart)

                Swal.fire(
                    'Elminado con éxito',
                    'El producto ha sido eliminado',
                    'success'
                )
            }
        })
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