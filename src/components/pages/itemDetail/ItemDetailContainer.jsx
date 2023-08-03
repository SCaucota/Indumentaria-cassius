import React, { useState, useEffect, useContext } from 'react';
import ItemDetail from './itemDetail';
import { useParams } from "react-router-dom"
import { CartContext } from '../../../context/CartContext';
import Swal from 'sweetalert2';
import "./itemDetailStyle.css";
import { db } from "../../../fireBaseConfig";
import { getDoc, collection, doc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    let { id } = useParams()

    const { addToCart, getQuantityById } = useContext(CartContext)

    let quantityProduct = getQuantityById(id)

    useEffect(() => {

        let refCollection = collection(db, "products")
        let refDoc = doc(refCollection, id)
        getDoc(refDoc).then ( res => setProduct({...res.data(), id: res.id}))

    }, [id])

    const agregarAlCarrito = (cantidad) => {
        let data = {
            ...product,
            quantity: cantidad,
        };

        addToCart(data);

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            background: "black",
            color: "white",
            customClass: {
                icon: "icon-color"
            },
            showConfirmButton: false,
            timer: 2200,
            timerProgressBar: true,
            showCloseButton: true
        })

        Toast.fire({
            icon: 'success',
            title: 'Producto Agregado'
        })
    }

    return (
        <>
            <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} quantity={quantityProduct} />
        </>
    )
}

export default ItemDetailContainer