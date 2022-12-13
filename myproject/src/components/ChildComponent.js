import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={() => props.eventHandler("Sefa")}>Click Child</button>
    </div>
  )
}

export default ChildComponent