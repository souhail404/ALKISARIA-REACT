import React, { useEffect, useState } from 'react'
import ProductImageSlider from '../components/product/product-data/ProductImageSlider';
import ProductInfos from '../components/product/product-page-sections/ProductInfosSec';
import ProductDescription from '../components/product/product-page-sections/ProductDescriptionSec';
import ProductTestimonialsSec from '../components/product/product-page-sections/ProductTestimonialsSec';

import productsData from 'C:/Users/LENOVO/Desktop/AL KISARIA/React-Website-v/alkisaria/src/data/products.json'

const Product = () => {

    


    return (
    <>
       {/* <!-- product data --> */}
        <section className="product-data-page p-5" id="product-data-page">
            <div className="container">
                <div className="content">
                    <div className="row product-media">
                        <ProductImageSlider images={productsData[0].images}/> 
                    </div>  
                    <div className="row product-infos">
                        <ProductInfos product={productsData[0]} />
                        <ProductDescription description={productsData[0].description} />
                    </div>
                </div>
            </div>
        </section>

        <ProductTestimonialsSec testimonials={productsData[0].testimonials} />
    </>
  )
}


export default Product;