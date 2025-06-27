import React from 'react'

const Products = ({saaman, saamanhata}) => {
  return (
    <div>
        {saaman.map((product, index) => (
        <React.Fragment key={product.id} >
          <div
            style={{ backgroundColor: "lavender", marginBottom: "10px", padding: "10px" }}

          >
            This is title:{product.name}
          </div>
          <button style={{ backgroundColor: "red" }}
            onClick={()=>saamanhata(product.id)}>
            Delete
            </button>
        </React.Fragment>
      ))}
      
    </div>
  )
}

export default Products
