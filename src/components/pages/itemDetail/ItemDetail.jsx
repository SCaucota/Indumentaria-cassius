import React from 'react';
import CounterContainer from '../../common/counter/CounterContainer';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ItemDetail = ({ product, agregarAlCarrito, quantity }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            {
                product === null
                    ?
                    <Stack spacing={1} sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                        <Skeleton animation='wave' variant="rectangular" width={345} height={320} sx={{ bgcolor: 'grey.300' }} />
                        <Skeleton animation='wave' variant="text" sx={{ fontSize: '1.5rem', width: "100px", bgcolor: 'grey.300' }} />
                        <Skeleton animation='wave' variant="text" sx={{ fontSize: '1rem', width: "80px", bgcolor: 'grey.300' }} />
                        <Skeleton animation='wave' variant="rounded" width={150} height={40} sx={{ bgcolor: 'grey.300' }} />
                    </Stack>
                    : 
                    <>
                        <h2>{product.title}</h2>
                        <img src={product.img} alt={product.title} />
                        <h3 style={{ fontSize: "22px" }}>${product.price}</h3>
                        <h3 style={{ color: "grey" }}>{product.description}</h3>
                        <CounterContainer stock={product.stock} agregarAlCarrito={agregarAlCarrito} quantity={quantity} />
                    </>
            }
        </div>
    )
}

export default ItemDetail