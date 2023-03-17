import React from 'react'

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
            <div className="rating">
                <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
            </div>
            <div className="price">
                <p className="real-price">{products[0].curprice} Dhs</p>
                <p className="old-price">{products[0].oldprice} Dhs</p>   
            </div>
        </div>
    </div>
  )
}

export default FeaturedProduct