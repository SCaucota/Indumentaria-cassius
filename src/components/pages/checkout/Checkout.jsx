import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./checkout.css"

const Checkout = ({ cart, getTotalPrice, handleSubmit, handleChange, errors }) => {

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
                            <h3 >${getTotalPrice}</h3>
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