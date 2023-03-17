import React from 'react'
import ProductCard from '../components/product/product-cards/ProductCard';
import DealProductsSec from '../components/product/product-page-sections/DealProductsSec';
import FeaturedProductsSec from '../components/product/product-page-sections/FeaturedProductsSec';

import productsData from 'C:/Users/LENOVO/Desktop/AL KISARIA/React-Website-v/alkisaria/src/data/products.json'


const Home = () => {
  return (
    <>
      <section className="hero" id="hero">
          <div className="hero-s-wrapper">
              <div style={{backgroundImage: 'url("media/images/banner/b3.png")'}}  className="hero-banner">
                  <div className="row">
                    <div className="main-txt">
                      <h1>Free delivery on all orders</h1>
                      <h2>because we believe in making your shopping experience easy and convenient.</h2>
                    </div>
                  </div>
                  <div className="row img">
                    <img className="illustratuion-img" src="media/images/banner/del.png" alt=""/> 
                  </div>
              </div>
              <div style={{backgroundImage: 'url("media/images/banner/b2.png")'}} className="hero-banner hero-banner-2">
                <div className="row">
                  <div className="main-txt">
                    <h1>Free delivery on all orders</h1>
                    <h2>because we believe in making your shopping experience easy and convenient.</h2>
                  </div>
                </div>
                <div className="row img">
                  <img className="illustratuion-img" src="media/images/banner/del.png" alt=""/>
                </div>
              </div>

          </div>
      </section>

      <section className="deal-and-featured-products p-5" id="d-f-products">
          <div className="container">
              <DealProductsSec />
              <FeaturedProductsSec />
          </div>
      </section>

      <section className="products-listing p-5" id="products-listing">
          <div className="container">
              <div className="collections-wrappers">
                  <div className="wrapper-title">
                      <h2 className="wrapper-title-txt">TOP SELLINGS</h2>
                  </div>
                  <div className="content">
                      <div className="products-cards-wrapper">
                          <ProductCard />
                          <ProductCard />
                          <ProductCard />
                          <ProductCard /> 
                      </div>
                  </div>
              </div>
              <div className="collections-wrappers">
                  <div className="wrapper-title">
                      <h2 className="wrapper-title-txt">NEW ARRIVALS</h2>
                  </div>
                  <div className="content">
                    <div className="products-cards-wrapper">
                      <ProductCard/>
                    </div>
                  </div>
              </div>
          </div>
      </section>


      
      
      
    </>
  )
}


export default Home;