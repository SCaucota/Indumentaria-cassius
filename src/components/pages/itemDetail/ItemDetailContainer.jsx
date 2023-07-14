import React, { useState, useEffect } from 'react';
import ItemDetail from './itemDetail';
import { products } from '../../../productsMock';
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    let {id} = useParams()

    useEffect(() => {
        let promesa = new Promise ((resolve, reject) => {
            let productoSeleccionado = products.find((product)=> product.id === +id)
            resolve(productoSeleccionado)
        })

        promesa.then((res) => setProduct(res)).catch(err => console.log(err))

    }, [id])

    const agregarAlCarrito = (cantidad) => {
        let data = {
            ...product,
            quantity: cantidad,
        };
        console.log(data)
    }

    return (
        <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito}/>
    )
}

export default ItemDetailContainer