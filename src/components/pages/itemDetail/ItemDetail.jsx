import React from 'react';
import ProductCards from '../../common/productCard/ProductCards';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import "./itemDetailStyle.css"

const ItemDetail = ({ notFound, product, agregarAlCarrito, quantity }) => {
    return (
        <div className='divContainer'>
            {
                notFound
                    ?
                    <div>
                        <h1>¡Lo sentimos!</h1>
                        <h2>El producto que esta buscando no existe</h2>
                    </div>
                    :
                    product === null
                        ?
                        <Stack spacing={1} sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                            <Skeleton animation='wave' variant="rectangular" width={345} height={320} sx={{ bgcolor: 'grey.300' }} />
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '1.5rem', width: "100px", bgcolor: 'grey.300' }} />
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '1.5rem', width: "100px", bgcolor: 'grey.300' }} />
                            <Skeleton animation='wave' variant="text" sx={{ fontSize: '1rem', width: "80px", bgcolor: 'grey.300' }} />
                            <Skeleton animation='wave' variant="rounded" width={200} height={40} sx={{ bgcolor: 'grey.300' }} />
                            <Skeleton animation='wave' variant="rounded" width={220} height={40} sx={{ bgcolor: 'grey.300' }} />
                        </Stack>
                        : 
                        <>
                            <ProductCards item={product} showCardActions={false} stock={product.stock} agregarAlCarrito={agregarAlCarrito} quantity={quantity} />
                        </>
            }
            
        </div>
    )
}

export default ItemDetail