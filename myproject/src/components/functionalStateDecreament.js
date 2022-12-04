// This is to provide state to a functional component and set a default value to a counter and whenever we click on it, it get decreased.
import { useState } from "react";
function FunctionalStateDecreament() {
    const [counter, setCounter] = useState(0)

    const decreament = () =>{
        setCounter(counter -1)
    }

    return (
        <div>
            <p>Counter value is {counter}</p>
            <button onClick={decreament}> Decrease </button>
        </div>
    );
}

export default FunctionalStateDecreament