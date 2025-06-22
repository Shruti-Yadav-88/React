import React from 'react'

const Daughter2 = ({upahar, changeUpahar}) => {
  return (
    <div>
      I am Daughter component
      <p>I got {upahar}</p>
      <button onClick={()=> changeUpahar("heels")}>Change Gift</button>
    </div>
  )
}

export default Daughter2
