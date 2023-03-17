import React from 'react'
import FeaturedProduct from '../product-cards/FeaturedProduct'

import productsData from 'C:/Users/LENOVO/Desktop/AL KISARIA/React-Website-v/alkisaria/src/data/products.json'

const FeaturedProductsSec = () => {
  return (
    <div className="featured-products">
        <div className="wrapper-title">
            <h2 className="wrapper-title-txt">Featured products</h2>
        </div>
        <div className="content">
            <FeaturedProduct products={productsData} />
            <FeaturedProduct products={productsData} />
            <FeaturedProduct products={productsData} />
            <FeaturedProduct products={productsData} />
            <FeaturedProduct products={productsData} />
            <FeaturedProduct products={productsData} />
            <FeaturedProduct products={productsData} />
            <FeaturedProduct products={productsData} />
        </div>
    </div>
  )
}

export default FeaturedProductsSec