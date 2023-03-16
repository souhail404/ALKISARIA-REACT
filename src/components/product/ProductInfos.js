import React from 'react'

const ProductInfos = (props) => {
    const product = props.product;

    return (
    <div className="info-part">
        <div className="pi--stock"> 
            <p>{product.stock} in stock</p>
        </div>
        <div className="pi--name">
            <p className="pi--name-txt">{product.name}</p>
        </div>
        <div className="pi--rating">
            <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
            <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
            <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
            <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
            <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
            <span className="staring-number">(32)</span>
        </div>
        <div className="pi--separator"></div>
        <div className="pi--price">
            <p className="real-price">{product.curprice} Dhs</p>
            <p className="old-price">{product.oldprice} Dhs</p>
        </div>
        <div className="pi--cta">
            <div className="col col1">
            <a href="" className="cta-btn buynow"> <p>Buy now</p> </a>
            <a href="" className="cta-btn fav" > <img src="media/images/icons/love-svgrepo-com.svg" alt=""/> </a>
            </div>
            <div className="col col2">
            <a href="" className="cta-btn addtc"> <p>Add to Cart</p> </a>
            </div>
        </div>
    </div>
  )
}

export default ProductInfos