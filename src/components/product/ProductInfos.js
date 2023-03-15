import React from 'react'

const ProductInfos = () => {
  return (
    <div className="info-part">
        <div className="pi--stock"> 
            <p>18 in stock</p>
        </div>
        <div className="pi--name">
            <p className="pi--name-txt">pack 3 ensemble de boîte de rangement pour sous-vêtement multi-grilles pliable</p>
        </div>
        <div className="pi--rating">
            <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
            <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
            <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
            <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
            <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
            <span className="staring-number">(36)</span>
        </div>
        <div className="pi--separator"></div>
        <div className="pi--price">
            <p className="real-price">91.50 Dhs</p>
            <p className="old-price">129.00 Dhs</p>
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