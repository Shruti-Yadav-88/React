import React from 'react'

const Input = ({samaanthap, setMyproduct, mailelekhekoproduct}) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
              <input type="text"
                onChange={(e) => setMyproduct(e.target.value)} />
              <button
                onClick={() => {
                  if (mailelekhekoproduct !== "")
                    // console.log("clicked")
                    samaanthap([...products,
                    { id: new Date().getTime(), 
                    name: mailelekhekoproduct,
                    price: 200 },])
                }}>Add this product</button>
            </div>
    </div>
  )
}

export default Input
