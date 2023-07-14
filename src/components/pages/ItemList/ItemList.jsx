import React from 'react';
import ProductCards from '../../common/productCard/ProductCards';

const ItemList = ({ items }) => {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", paddingTop: "35px"}}>
            {
                items.map((item) => {
                    return(
                        <ProductCards  key={item.id} item={item}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList