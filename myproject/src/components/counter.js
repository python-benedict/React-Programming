import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
            decrease: 0,
        };
    }

    increament(){
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    decreament(){
        this.setState({
            decrease: this.state.decrease - 1,
        })
    }

    render(){
        return (<div>
            <h3> Increament counter: {this.state.counter}</h3>
            <h3> Decreament counter: {this.state.decrease}</h3>
            <button onClick={()=> this.increament()}>Click to Increase</button>
            <button onClick={()=> this.decreament()}>Click to Decrease</button>
        </div>);
    }
}

export default Counter