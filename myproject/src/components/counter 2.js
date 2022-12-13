import react, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            counter: 1
        }
    }
    Increase(){
        this.setState({
            counter: this.state.counter + 1
        },() =>{
            console.log("The callback value: ", this.state.counter)// this code will get executed anytime there is change is state
        }
        )
        console.log(this.state.counter)// this code will get executed before there is change in state
    }
    

    render(){
        return (
            <div>
                <h1>counter: {this.state.counter}</h1>
                <button onClick={()=>this.Increase()}>Increase</button>
            </div>
        )
    }
}

export default Counter