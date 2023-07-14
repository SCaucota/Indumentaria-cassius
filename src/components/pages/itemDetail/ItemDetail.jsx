import React from 'react';
import CounterContainer from '../../common/counter/CounterContainer';

const ItemDetail = ({ product, agregarAlCarrito }) => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}> 
            <h2>{product.title}</h2>
            <img src={product.img} alt={product.title} />
            <h3 style={{fontSize: "22px"}}>${product.price}</h3>
            <CounterContainer stock={product.stock} agregarAlCarrito={agregarAlCarrito} />
        </div>
    )
}

export default ItemDetail