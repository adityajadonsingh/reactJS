import React, { memo } from 'react'

const Child = memo((counter) => {
    console.log("child")
  return (
    <div>
      <h1>Child Coponent</h1>
    </div>
  )
})

export default Child
