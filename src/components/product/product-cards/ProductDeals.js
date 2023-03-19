import React from 'react'
import Rating from '../../global/Rating'
import Timer from '../../global/Timer'

const ProductDeals = (props) => {
    const products = props.products
    return (
    <div className="d-product">
        <div className="img">
            <img src={products[0].images[1].src} alt="product"/>
        </div>
        <div className="infos">

            <Timer 
                year={2023} 
                month={3} 
                day={25} 
                hour={17} 
                minute={35} 
            />
            
            <div className="products-data">
                <div className="name">
                    <a href="" className="name-txt">{products[0].name}</a>
                </div>
                
                <Rating rate={products[0].rating}/>

                <div className="price">
                    <p className="real-price">{products[0].curprice} Dhs</p>
                    <p className="old-price">{products[0].oldprice} Dhs</p>
                </div>
                <div className="cta">
                    <a href="" className="buy-btn">Buy Now</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDeals