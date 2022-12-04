// This is a functional base component to set conditions to components

import { useState } from "react";
function FuncStaRend() {
    const [display, setDisplay] = useState(true)
    if (display==true) {
        return <h3>This means display is true</h3>
    } else {
        return <h3>This means display is false</h3>
    }
}

export default FuncStaRend