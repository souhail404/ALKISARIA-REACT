import React from 'react'
import Rating from '../../global/Rating';

const FeaturedProduct = (props) => {
    const products = props.products;
    return (
    <div className="f-product">
        <div className="img">
            <img src={products[0].images[1].src} alt="product"/>
        </div>
        <div className="infos">
            <div className="name">
                <a href="#" className="name-txt">{products[0].name}</a>
            </div>
            
            <Rating rate={products[0].rating}/>

            <div className="price">
                <p className="real-price">{products[0].curprice} Dhs</p>
                <p className="old-price">{products[0].oldprice} Dhs</p>   
            </div>
        </div>
    </div>
  )
}

export default FeaturedProduct