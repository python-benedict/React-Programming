import { Component } from "react";

class Ehicbc extends Component{
    envents(){
        console.log("I am tring event handling in class base components")
    }
    render(){
        return( <div>
            <button onClick={this.envents}>Click Ehicbc</button>
        </div>);
    }
}

export default Ehicbc