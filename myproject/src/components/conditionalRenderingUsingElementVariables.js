// This is a functional base component conditional rendering using Elements.

import { useState } from "react";
function CondiRendUsingElements() {
    const [display, setDisplay] = useState(true)
    let output;
    if (display) {
        output = <h3>This pages says true for output</h3>
    } else {
        output = <h3>This pages says false for output</h3>
    }

    return <h3>{output}</h3>
}

export default CondiRendUsingElements