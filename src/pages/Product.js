import React, { useEffect, useState } from 'react'
import ProductImageSlider from '../components/product/ProductImageSlider';
import ProductInfos from '../components/product/ProductInfos';
import ProductDescription from '../components/product/ProductDescription';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import productsData from 'C:/Users/LENOVO/Desktop/AL KISARIA/React-Website-v/alkisaria/src/data/products.json'

const Product = () => {

    


    return (
    <>
       {/* <!-- product data --> */}
        <section className="product-data-page p-5" id="product-data-page">
            <div className="container">
                <div className="content">
                    <div className="row product-media">
                      <ProductImageSlider product={productsData[0]}/> 
                    </div>  
                    <div className="row product-infos">
                        <ProductInfos product={productsData[0]} />
                        <ProductDescription/>
                    </div>
                </div>
            </div>
        </section>

        <TestimonialsSection/>
    </>
  )
}


export default Product;