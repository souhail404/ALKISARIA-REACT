import React from 'react'

const ProductImageSlider = () => {
  
  return (
    <div className="pp--slider-wrapper">
        <div className="main-img">
            <img className=".m-img" id='main-img--img' src="" alt=""/>
            <div className="main-click-rl">
                <span className="slide-btn slide-btn-l"><img src="media/images/icons/chevron-left.svg" alt=""/></span>
                <span className="slide-btn slide-btn-r"><img src="media/images/icons/chevron-right.svg" alt=""/></span>
            </div>
        </div>
        <div className="slider-imgs">
            <div className="imgs">
                <div className="img"><img src="media/images/products/7.jpg" alt=""/></div>
                <div className="img"><img src="media/images/products/6.jpg" alt=""/></div>
                <div className="img"><img src="media/images/products/12.jpg" alt=""/></div>
                <div className="img"><img src="media/images/products/8.jpg" alt=""/></div>
                <div className="img"><img src="media/images/products/9.jpg" alt=""/></div>
                <div className="img"><img src="media/images/products/10.jpg" alt=""/></div>
                <div className="img"><img src="media/images/products/11.jpg" alt=""/></div>
            </div>
            <div className="click-rl">
                <span className="slide-btn slide-btn-l"><img src="media/images/icons/chevron-left.svg" alt=""/></span>
                <span className="slide-btn slide-btn-r"><img src="media/images/icons/chevron-right.svg" alt=""/></span>
            </div>
        </div>
    </div>  
  )
}

export default ProductImageSlider