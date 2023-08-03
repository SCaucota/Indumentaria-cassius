import React from 'react';
import ProductCards from '../../common/productCard/ProductCards';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ItemList = ({ items }) => {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", paddingTop: "35px"}}>
            {
                items.length > 0 
                ? items.map((item) => <ProductCards  key={item.id} item={item}/>)
                : Array.from({length: 5}, (element, index) => (
                    <Stack spacing={1} key={index} sx={{display: "flex", alignItems: "center", marginTop: "20px"}}>
                        <Skeleton animation='wave' variant="rectangular" width={345} height={320} sx={{bgcolor: 'grey.300'}}/>
                        <Skeleton animation='wave' variant="text" sx={{ fontSize: '1.5rem', width: "100px", bgcolor: 'grey.300' }} />
                        <Skeleton animation='wave' variant="text" sx={{ fontSize: '1rem', width: "80px", bgcolor: 'grey.300' }} />
                        <Skeleton animation='wave' variant="rounded" width={150} height={40} sx={{bgcolor: 'grey.300'}}/>
                    </Stack>
                ))
            }
        </div>
    )
}

export default ItemList