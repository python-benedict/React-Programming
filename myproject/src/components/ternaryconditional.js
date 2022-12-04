// created a functional base component using Ternary Condition

import { useState } from "react";
function TernaryCondition() {
    const [display, setDisplay] = useState(true)

    return display ? <div>Hello to Patience</div>: <div>Hi to Patience</div>;
}

export default TernaryCondition