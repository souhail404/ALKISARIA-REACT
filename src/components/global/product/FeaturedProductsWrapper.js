import React from 'react'
import FeaturedProduct from './cards/FeaturedProduct'

import data from '../../../data/data.json'

const FeaturedProducts = () => {
  const productsData = data.products;
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

export default FeaturedProducts