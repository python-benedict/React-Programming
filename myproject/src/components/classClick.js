import React, { Component } from 'react'

class ClassClick extends Component {
    clickMe(){
        console.log("He clicked me")
    }

  render() {
    return (
      <div>
        <h1>Hello there</h1>
        <button onClick={this.clickMe}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick