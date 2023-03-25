import React from 'react'
import Rating from '../../Rating'

const ProductCard = (props) => {
    const name = props.name;
    const price = props.price;
    const rating = props.rating;
    const imageSrc = props.imageSrc;

  return (
    <div className="product-card">
        <a href="product" className="product-image">
            <img src={imageSrc} alt="Product"/>
        </a>
        <div className="product-info">
            <a href="product" className="product-name ">{name}</a>
            
            <Rating rate={rating} />
            
            <div className="product-price">
                <p className="real-price">{price} Dhs</p>
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