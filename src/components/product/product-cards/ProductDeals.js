import React from 'react'

const ProductDeals = (props) => {
    const products = props.products
    return (
    <div className="d-product">
        <div className="img">
            <img src={products[0].images[1].src} alt="product"/>
        </div>
        <div className="infos">
            <div id="timer"> 
                <p className="timer-txt">Ends in :</p>
                <div id="days">0 day</div>
                <div id="hours">00 Hrs</div>
                <div id="minutes">00 Min</div>
                <div id="seconds">00 Sec</div>
            </div>
            <div className="products-data">
                <div className="name">
                    <a href="" className="name-txt">{products[0].name}</a>
                </div>
                <div className="rating">
                    <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                    <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                    <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                    <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                    <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                </div>
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