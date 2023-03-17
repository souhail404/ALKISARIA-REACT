import React from 'react'

const ProductName = (props) => {
  const name = props.name;
  return (
    <div className="pi--name">
        <p className="pi--name-txt">{name}</p>
    </div>
  )
}

export default ProductName