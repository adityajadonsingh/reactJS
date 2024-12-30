import React from 'react'
import { useState } from 'react'

const Counter = (props) => {

  return (
    <>
        <p><strong>Counter</strong>: {props.count}</p>
        <button onClick={()=>{props.setCounter(props.count + 1)}}>Click Me</button>
    </>
  )
}

export default Counter