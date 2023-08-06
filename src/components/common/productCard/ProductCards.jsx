import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import CounterContainer from '../counter/CounterContainer';

const ProductCards = ({ item, showCardActions, stock, agregarAlCarrito, quantity}) => {
    return (
        <Card sx={{ width: 345, height: showCardActions ? "515px" : "650px", marginTop: "20px"}}>
            <CardMedia
                sx={{ height: 320 }}
                image={item.img}
                title={item.product}
            />
            <CardContent style={{padding: "20px"}}>
                <Typography style={{display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "underline", paddingBottom: "20px"}} gutterBottom variant="h6" component="div">
                    {item.title}
                </Typography>
                <Typography style={{display: showCardActions ? "none" : "flex", alignItems: "center", justifyContent: "center", paddingBottom: "15px", fontSize: "18px" }} variant="h6" color="text.secondary">
                    {item.description}
                </Typography>
                <Typography style={{display: "flex", alignItems: "center", justifyContent: "center"}} variant="h6" color="text.primary">
                    ${item.price}
                </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center" }} >
                {
                    showCardActions ? 
                        <Link to={`/item/${item.id}`}>
                            <Button size="medium" style={{backgroundColor: "black", color: "white"}}>Ver Detalle</Button>
                        </Link>
                    :
                    <CounterContainer stock={stock} agregarAlCarrito={agregarAlCarrito} quantity={quantity}/>
                }
                
            </CardActions>
        </Card>
    )
}

export default ProductCards