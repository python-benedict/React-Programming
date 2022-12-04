import { Component } from "react";

class Bind extends Component{
    constructor(){
        super();
        this.state={
            counter: 0,
        };
        // the line below binds the event handler (increament) with this 
        this.increament = this.increament.bind(this)
    }

    increament(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){
        return(
            <div>
                <p>Counter {this.state.counter}</p>
                <button onClick={this.increament}>Click Bind</button>
            </div>
        )
    }
}

export default Bind