import { Component } from "react";

class Message extends Component{
    render(){
        return <h1>This is a class Component that says name: {this.props.name}</h1>
    }
}

export default Message