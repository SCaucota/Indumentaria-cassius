import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"

const ProductCards = ({ item }) => {
    return (
        <Card sx={{ width: 345, height: "500px", marginTop: "20px"}}>
            <CardMedia
                sx={{ height: 320 }}
                image={item.img}
                title={item.product}
            />
            <CardContent style={{padding: "20px"}}>
                <Typography style={{display: "flex", alignItems: "center", justifyContent: "center"}} gutterBottom variant="h6" component="div">
                    {item.title}
                </Typography>
                <Typography style={{display: "flex", alignItems: "center", justifyContent: "center"}} variant="h6" color="text.secondary">
                    ${item.price}
                </Typography>
            </CardContent>
            <CardActions style={{display: "flex", justifyContent: "center"}}>
                <Link to={`/item/${item.id}`}>
                    <Button size="medium" style={{backgroundColor: "black", color: "white"}}>Ver Detalle</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default ProductCards