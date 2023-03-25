import React from 'react'

const ProductStock = (props) => {
  const stock = props.stock;
  return (
    <div className="pi--stock"> 
        <p>{stock} in stock</p>
    </div>
  )
}

export default ProductStock