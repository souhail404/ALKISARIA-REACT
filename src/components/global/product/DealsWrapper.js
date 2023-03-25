import React from 'react'
import ProductDeals from './cards/ProductDeals';

import data from '../../../data/data.json'

const Deals = () => {
  const productsData = data.products;
  return (
    <div className="deal-products">
        <div className="wrapper-title">
            <h2 className="wrapper-title-txt">TODAY'S DEALS</h2>
        </div>
        <div className="content">
            <ProductDeals products={productsData}/>
        </div>
    </div>
  )
}

export default Deals