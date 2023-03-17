import React from 'react'

const ProductCard = () => {
  return (
    <div className="product-card">
        <a href="product" className="product-image">
            <img src="media/images/products/5.jpg" alt="Product Image"/>
        </a>
        <div className="product-info">
            <a href="product" className="product-name">XIAOMI Mi 20W Wireless Car Charger</a>
            
            <div className="product-ratings rating">
                <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
            </div>
            <div className="product-price">
                <p className="real-price">239.00 Dhs</p>
                <p className="old-price">299.00 Dhs</p>
            </div>
            <div className="cta">
                <a href="product" className="buy-now-btn">Buy Now</a>
            </div>
        </div>
    </div>
  )
}

export default ProductCard