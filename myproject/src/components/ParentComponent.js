import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Parent"
      }
      this.clickEvent = this.clickEvent.bind(this)
    }

    clickEvent(sefa){
        alert(`Hello ${this.state.message} from ${sefa}`)
    }

  render() {
    return (
      <div><ChildComponent eventHandler={this.clickEvent}/></div>
    )
  }
}

export default ParentComponent