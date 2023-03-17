import React from 'react'
import ProductDeals from '../product-cards/ProductDeals';
import productsData from 'C:/Users/LENOVO/Desktop/AL KISARIA/React-Website-v/alkisaria/src/data/products.json'

const DealProductsSec = () => {
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

export default DealProductsSec