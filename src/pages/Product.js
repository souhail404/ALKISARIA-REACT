import React from 'react'
import ProductImageSlider from '../components/sections/ProductImageSlider';
import ProductInfos from '../components/sections/ProductInfos';
import ProductDescription from '../components/sections/ProductDescription';
import ProductTestimonials from '../components/sections/ProductTestimonials';

import data from 'C:/Users/LENOVO/Desktop/AL KISARIA/React-Website-v/alkisaria/src/data/data.json'

const Product = () => {
    const productsData = data.products;
    


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

        <ProductTestimonials testimonials={productsData[0].testimonials} />
    </>
  )
}


export default Product;