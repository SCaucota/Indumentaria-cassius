import React from 'react';
import Checkout from './Checkout';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../fireBaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const CheckoutContainer = () => {

    const { cart, getTotalPrice } = useContext(CartContext);

    const [orderId, setOrderId] = useState("");

    const navigate = useNavigate();

    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            name: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            verifirerEmail: "",
        },
        onSubmit: (data) => {
            let total = getTotalPrice()

            let order = {
                buyer: data,
                items: cart,
                total,
                date: serverTimestamp(),
                state: "Generada",
            }

            let ordersCollections = collection(db, "orders")

            addDoc(ordersCollections, order).then(res => {
                setOrderId(res.id);
                cart.forEach((elemento) => {
                    updateDoc(doc(db, "products", elemento.id), { stock: elemento.stock - elemento.quantity })
                })
    
                navigate("/");
    
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
                    timer: 10000,
                    showCloseButton: true
                })
    
                Toast.fire({
                    icon: 'success',
                    title: 'Compra exitosa',
                    text: `Su número de compra es: ${res.id}`
                })
            });

            

        },
        validationSchema: Yup.object({
            name: Yup.string().required("Campo Obligatorio").min(5, "Demasiado corto").max(10, "Demasiado largo"),
            lastName: Yup.string().required("Campo Obligatorio").min(5, "Demasiado corto").max(10, "Demasiado largo"),
            phoneNumber: Yup.number().required("Campo Obligatorio").min(1000000000, "Demasiado corto").max(9999999999, "Demasiado largo"),
            email: Yup.string().email().required("Campo Obligatorio"),
            verifirerEmail: Yup.string().oneOf([Yup.ref("email"), null], "El email no coincide").required("Campo Obligatorio"),
        }),
        validateOnChange: false,
    });

    return (
        <Checkout cart={cart} getTotalPrice={getTotalPrice()} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}/>
    )
}

export default CheckoutContainer