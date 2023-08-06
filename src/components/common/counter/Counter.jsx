import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./counter.css"

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button
                    disabled={counter <= 1}
                    variant="contained"
                    onClick={() => setCounter(counter - 1)}
                    className="plusLess border1"
                    style={{borderTopRightRadius: "0px", borderBottomRightRadius: "0px"}}
                >
                    -
                </Button>
                <h2 className="number">{counter}</h2>
                <Button
                    disabled={counter >= stock}
                    variant="contained"
                    onClick={() => setCounter(counter + 1)}
                    className="plusLess border2"
                    style={{borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}}
                >
                    +
                </Button>
            </div>
            <br />
            <Button
                variant="contained"
                onClick={() => agregarAlCarrito(counter)}
                style={{backgroundColor: "black"}}
                startIcon={<AddShoppingCartIcon/>}
            >
                Agregar al carrito
            </Button>
        </div>
    );
};

export default Counter;