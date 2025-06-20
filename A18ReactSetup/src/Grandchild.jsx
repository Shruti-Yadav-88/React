import React from 'react'

const Grandchild = ({jutta}) => {
  return (
    <div style={{backgroundColor: "lightblue"}}>
      I am Grandchild
      <div>I got {jutta}</div>
    </div>
  )
}

export default Grandchild
