// This is to give a state for functional component

import { useState } from "react";
function FunctionalState() {
    const [counter, setCounter] = useState(0)

    const increament = () =>{
        setCounter(counter + 1)
    }

    return (
        <div>
            <p>Counter value is: {counter}</p>
            <button onClick={increament}>Click to increase</button>
        </div>
    )
}

export default FunctionalState