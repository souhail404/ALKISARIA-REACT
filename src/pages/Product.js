import React from 'react'
import ProductImageSlider from '../components/product/ProductImageSlider';
import ProductInfos from '../components/product/ProductInfos';
import ProductDescription from '../components/product/ProductDescription';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';

const Product = () => {

    return (
    <>
       {/* <!-- product data --> */}
        <section className="product-data-page p-5" id="product-data-page">
            <div className="container">
                <div className="content">
                    <div className="row product-media">
                      <ProductImageSlider/> 
                    </div>  
                    <div className="row product-infos">
                        <ProductInfos/>
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