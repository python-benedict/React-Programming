import { Component } from "react";

class Destruc1 extends Component{
    render(){
        const {name, age} = this.props
        return <h3>Hello to everybody {name} {age}</h3>
    }
}

export default Destruc1