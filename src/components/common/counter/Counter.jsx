import { Button } from "@mui/material";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button
                    disabled={counter <= 1}
                    variant="contained"
                    onClick={() => setCounter(counter - 1)}
                    style={{width: "20px", padding: "0px", fontSize: "18px", height: "30px"}}
                >
                    -
                </Button>
                <h2 style={{paddingLeft: "20px", paddingRight: "20px"}}>{counter}</h2>
                <Button
                    disabled={counter >= stock}
                    variant="contained"
                    onClick={() => setCounter(counter + 1)}
                    style={{width: "20px", padding: "0px", fontSize: "18px", height: "30px"}}
                >
                    +
                </Button>
            </div>
            <br />
            <Button
                variant="contained"
                onClick={() => agregarAlCarrito(counter)}
                style={{backgroundColor: "orange"}}
            >
                Agregar al carrito
            </Button>
        </div>
    );
};

export default Counter;