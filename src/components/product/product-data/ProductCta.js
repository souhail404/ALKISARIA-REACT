import React from 'react'

const ProductCta = () => {
  return (
    <div className="pi--cta">
        <div className="col col1">
        <a href="" className="cta-btn buynow"> <p>Buy now</p> </a>
        <a href="" className="cta-btn fav" > <img src="media/images/icons/love-svgrepo-com.svg" alt=""/> </a>
        </div>
        <div className="col col2">
        <a href="" className="cta-btn addtc"> <p>Add to Cart</p> </a>
        </div>
    </div>
  )
}

export default ProductCta