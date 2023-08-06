import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../fireBaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import "./checkout.css"

const Checkout = () => {

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
                state: "Generada"
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
                    timer: 4200,
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
            verifirerEmail: Yup.string().oneOf([Yup.ref("email"), null], "El email no coincide").required("Campo Obligatorio")
        }),
        validateOnChange: false,
    });

    return (
        <div className='checkoutContainer'>
            <div>
                <div>
                    {
                        cart.map((product) => {
                            return (
                                <div key={product.id} style={{ display: "flex", justifyContent: "center" }}>
                                    <div className='productContainer'>
                                        <div className='imgTitle'>
                                            <img style={{ width: "70px", height: "70px", paddingRight: "10px" }} src={product.img} alt="" />
                                            <h3>{product.title}</h3>
                                        </div>
                                        <h3>cantidad: {product.quantity}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className='totalCheckout'>
                            <h3>TOTAL:</h3>
                            <h3 >${getTotalPrice()}</h3>
                        </div>
                    </div>
                </div>
                <h2 style={{ display: "flex", justifyContent: "center", padding: "50px" }}>Completa el formulario</h2>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    className="formContainer"
                >
                    <TextField
                        id="filled-helperText"
                        label="Nombre"
                        name="name"
                        variant="filled"
                        onChange={handleChange}
                        error={errors.name ? true : false}
                        helperText={errors.name}
                    />
                    <TextField
                        id="filled-helperText"
                        label="Apellido"
                        name="lastName"
                        variant="filled"
                        onChange={handleChange}
                        error={errors.lastName ? true : false}
                        helperText={errors.lastName}
                    />
                    <TextField
                        id="filled-helperText"
                        label="Teléfono"
                        name="phoneNumber"
                        type="number"
                        variant="filled"
                        onChange={handleChange}
                        error={errors.phoneNumber ? true : false}
                        helperText={errors.phoneNumber}
                    />
                    <TextField
                        id="filled-helperText"
                        label="Email"
                        name="email"
                        type="email"
                        variant="filled"
                        onChange={handleChange}
                        error={errors.email ? true : false}
                        helperText={errors.email}
                    />
                    <TextField
                        id="filled-helperText"
                        label="Repetir Email"
                        name='verifirerEmail'
                        type="email"
                        variant="filled"
                        onChange={handleChange}
                        error={errors.verifirerEmail ? true : false}
                        helperText={errors.verifirerEmail}
                    />
                </Box>
                <Stack spacing={2} direction="row" style={{ display: "flex", justifyContent: "center", marginTop: "45px" }}>
                    <Button className="colorButton" onClick={handleSubmit} variant="outlined">Finalizar compra</Button>
                </Stack>
            </div>
        </div>
    )
}

export default Checkout