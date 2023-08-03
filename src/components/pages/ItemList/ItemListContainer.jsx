import React from 'react';
import { useState, useEffect } from 'react';
import {db} from "../../../fireBaseConfig";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where} from "firebase/firestore"

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {

        let consulta;

        let productsColletion = collection(db, "products");

        if(!categoryName) {
            consulta = productsColletion
        }else {
            consulta = query(productsColletion, where("category", "==", categoryName))
        }

        getDocs(consulta).then(res =>{

            let arrayProductos = res.docs.map(product => {
                return {...product.data(), id: product.id}
            });

            setItems(arrayProductos)
        })
    }, [categoryName])

    return <ItemList items={items} />
}

export default ItemListContainer