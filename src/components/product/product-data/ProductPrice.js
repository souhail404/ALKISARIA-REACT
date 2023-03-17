import React from 'react'

const ProductPrice = (props) => {
  const curprice = props.curprice;
  const oldprice = props.oldprice;
  return (
    <div className="pi--price">
        <p className="real-price">{curprice} Dhs</p>
        <p className="old-price">{oldprice} Dhs</p>
    </div>
  )
}

export default ProductPrice