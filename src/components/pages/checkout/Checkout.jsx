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

const Checkout = () => {

    const { cart, getTotalPrice } = useContext(CartContext);

    const [orderId, setOrderId] = useState("")

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
                date: serverTimestamp()
            }

            let ordersCollections = collection(db, "orders")

            addDoc(ordersCollections, order).then(res => setOrderId(res.id))

            cart.forEach((elemento) => {
                updateDoc(doc(db, "products", elemento.id), {stock: elemento.stock - elemento.quantity})
            })

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
        <div>
            {
                orderId
                    ? <h3>Su número de compra es: {orderId}</h3>
                    : <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
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
                        <Stack spacing={2} direction="row">
                            <Button type='submit' variant="outlined">Finalizar compra</Button>
                        </Stack>
                    </Box>
            }
        </div>
    )
}

export default Checkout