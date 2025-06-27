import React from 'react'

const Total = ({products}) => {
    let total = 0;
    products.forEach((product)=>{
        total=total + product.price;
    });
  return (
    <div>
        The Total amount is:{total}
      
    </div>
  )
}

export default Total
