import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ agregarAlCarrito, stock, quantity=1 }) => {
    const [counter, setCounter] = useState(quantity);

    return (
        <Counter
            counter={counter}
            setCounter={setCounter}
            agregarAlCarrito={agregarAlCarrito}
            stock={stock}
        />
    );
};

export default CounterContainer;