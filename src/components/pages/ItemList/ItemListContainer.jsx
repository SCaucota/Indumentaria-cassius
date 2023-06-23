import React from 'react';

const ItemListContainer = ( {persona} ) => {

    return (
        <div>
            <p style={{textAlign: "center", fontSize: "30px"}}> Bienvenido/a {persona.nombre + " " + persona.apellido}</p>
        </div>
    )
}

export default ItemListContainer