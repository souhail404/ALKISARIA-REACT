import React from 'react'

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
              <div className="deal-products">
                  <div className="wrapper-title">
                      <h2 className="wrapper-title-txt">TODAY'S DEALS</h2>
                  </div>
                  <div className="content">
                      <div className="d-product">
                          <div className="img">
                              <img src="media/images/products/3.jpg" alt="product"/>
                          </div>
                          <div className="infos">
                              <div id="timer"> 
                                  <p className="timer-txt">Ends in :</p>
                                  <div id="days">0 day</div>
                                  <div id="hours">00 Hrs</div>
                                  <div id="minutes">00 Min</div>
                                  <div id="seconds">00 Sec</div>
                              </div>
                              <div className="products-data">
                                  <div className="name">
                                      <a href="" className="name-txt">Jbl Tune 510BT Wireless On-Ear Headphone Black</a>
                                  </div>
                                  <div className="rating">
                                      <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                                      <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                                      <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                                      <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                                      <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                                  </div>
                                  <div className="price">
                                      <p className="real-price">120$</p>
                                      <p className="old-price">280$</p>
                                  </div>
                                  <div className="cta">
                                      <a href="" className="buy-btn">Buy Now</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="featured-products">
                  <div className="wrapper-title">
                      <h2 className="wrapper-title-txt">Featured products</h2>
                  </div>
                  <div className="content">
                      <div className="f-product">
                          <div className="img">
                              <img src="  media/images/products/12.jpg" alt="product"/>
                          </div>
                          <div className="infos">
                              <div className="name">
                                  <a href="#" className="name-txt">Smartwatch Y68 Sport Bluetooth avec moniteur de fréquence cardiaque Android IOS</a>
                              </div>
                              <div class="rating">
                                  <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                                  <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                                  <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                                  <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                                  <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                              </div>
                              <div className="price">
                                  <p className="real-price">95.00 Dhs</p>
                                  <p className="old-price">160.00 Dhs</p>   
                              </div>
                          </div>
                      </div>
                      <div className="f-product">
                                <div className="img">
                                    <img src="media/images/products/11.jpg" alt="product"/>
                                </div>
                                <div className="infos">
                                    <div className="name">
                                        <p className="name-txt">Brassard Bras bande pour Sport Haute Qualite Standart, Impermeable, Rangement clés, Ecouteurs</p>
                                    </div>
                                    <div className="rating">
                                        <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                                        <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                                        <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                                        <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                                        <span className="satr"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                                    </div>
                                    <div className="price">
                                        <p className="real-price">39.89 Dhs</p>
                                        <p className="old-price">120.89 Dhs</p>   
                                    </div>
                                </div>
                            </div>
                  </div>
              </div>
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
                          <div className="product-card">
                              <a href="product" className="product-image">
                                <img src="media/images/products/5.jpg" alt="Product Image"/>
                              </a>
                              <div className="product-info">
                                <a href="product" class="product-name">XIAOMI Mi 20W Wireless Car Charger</a>
                                
                                <div className="product-ratings rating">
                                  <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                                  <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                                  <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                                  <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                                  <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                                </div>
                                <div className="product-price">
                                  <p className="real-price">239.00 Dhs</p>
                                  <p className="old-price">299.00 Dhs</p>
                                </div>
                                <div className="cta">
                                  <a href="product" className="buy-now-btn">Buy Now</a>
                                </div>
                                
                              </div>
                          </div>
                          <div className="product-card">
                              <a href="product.html" className="product-image">
                                <img src="media/images/products/10.jpg" alt="Product Image"/>
                              </a>
                              <div className="product-info">
                                <a href="product.html" className="product-name">Masque facial complet, couverture de protection, Masque de sécurité, coupe-vent</a>
                                
                                <div class="product-ratings rating">
                                  <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                                  <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                                  <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                                  <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                                  <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                                </div>
                                <div className="product-price">
                                  <p className="real-price">99.00 Dhs</p>
                                  <p className="old-price">159.00 Dhs</p>
                                </div>
                                <div className="cta">
                                  <a href="product.html" className="buy-now-btn">Buy Now</a>
                                </div>
                                
                              </div>
                          </div>
                          {/* <div class="product-card">
                              <a href="product.html" class="product-image">
                                <img src="src/media/images/products/7.jpg" alt="Product Image">
                              </a>
                              <div class="product-info">
                                <a href="product.html" class="product-name">Offfre luminaire led murale au design moderne décoration d intérieur</a>
                                
                                <div class="product-ratings rating">
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-regular.svg" alt=""></span>
                                </div>
                                <div class="product-price">
                                  <p class="real-price">36.00 Dhs</p>
                                  <p class="old-price">72.00 Dhs</p>
                                </div>
                                <div class="cta">
                                  <a href="product.html" class="buy-now-btn">Buy Now</a>
                                </div>
                                
                              </div>
                          </div>
                          <div class="product-card">
                              <a href="product.html" class="product-image">
                                <img src="src/media/images/products/6.jpg" alt="Product Image">
                              </a>
                              <div class="product-info">
                                <a href="product.html" class="product-name">Offfre filet de pêche parapluie pliable automatique cerf volant mobile</a>
                                
                                <div class="product-ratings rating">
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-regular.svg" alt=""></span>
                                </div>
                                <div class="product-price">
                                  <p class="real-price">86.00 Dhs</p>
                                  <p class="old-price">129.00 Dhs</p>
                                </div>
                                <div class="cta">
                                  <a href="product.html" class="buy-now-btn">Buy Now</a>
                                </div>
                                
                              </div>
                          </div>
                          <div class="product-card">
                              <a href="product.html" class="product-image">
                                <img src="src/media/images/products/8.jpg" alt="Product Image">
                              </a>
                              <div class="product-info">
                                <a href="product.html" class="product-name">Tablette Jouet Enfant Dessin, Tactile Effaçable, Tableau à dessiner écriture</a>
                                
                                <div class="product-ratings rating">
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-regular.svg" alt=""></span>
                                </div>
                                <div class="product-price">
                                  <p class="real-price">119.00 Dhs</p>
                                  <p class="old-price">199.00 Dhs</p>
                                </div>
                                <div class="cta">
                                  <a href="product.html" class="buy-now-btn">Buy Now</a>
                                </div>
                                
                              </div>
                          </div>
                          <div class="product-card">
                              <a href="product.html" class="product-image">
                                <img src="src/media/images/products/9.jpg" alt="Product Image">
                              </a>
                              <div class="product-info">
                                <a href="product.html" class="product-name">pack 3 ensemble de boîte de rangement pour sous-vêtement multi-grilles pliable</a>
                                
                                <div class="product-ratings rating">
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-full.svg" alt=""></span>
                                  <span class="star"><img src="src/media/images/icons/star-regular.svg" alt=""></span>
                                </div>
                                <div class="product-price">
                                  <p class="real-price">599.00 Dhs</p>
                                  <p class="old-price">619.00 Dhs</p>
                                </div>
                                <div class="cta">
                                  <a href="product.html" class="buy-now-btn">Buy Now</a>
                                </div>
                                
                              </div>
                          </div> */}
                      </div>
                  </div>
              </div>
              <div className="collections-wrappers">
                  <div className="wrapper-title">
                      <h2 className="wrapper-title-txt">NEW ARRIVALS</h2>
                  </div>
                  <div className="content">
                    <div className="products-cards-wrapper">

                      <div className="product-card">
                          <a href="#" className="product-image">
                            <img src="media/images/products/5.jpg" alt="Product Image"/>
                          </a>
                          <div className="product-info">
                            <a href="#" className="product-name">XIAOMI Mi 20W Wireless Car Charger</a>
                            
                            <div class="product-ratings rating">
                              <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                              <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                              <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                              <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                              <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                            </div>
                            <div className="product-price">
                              <p className="real-price">239.00 Dhs</p>
                              <p className="old-price">299.00 Dhs</p>
                            </div>
                            <div className="cta">
                              <a href="#" className="buy-now-btn">Buy Now</a>
                            </div>
                            
                          </div>
                      </div>
                          {/* <a href="#" className="product-image">
                            <img src="media/images/products/9.jpg" alt="Product Image"/>
                          </a>
                          <div className="product-info">
                            <a href="#" className="product-name">pack 3 ensemble de boîte de rangement pour sous-vêtement multi-grilles pliable</a>
                            
                            <div className="product-ratings rating">
                              <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                              <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                              <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                              <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                              <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                            </div>
                            <div className="product-price">
                              <p className="real-price">599.00 Dhs</p>
                              <p className="old-price">619.00 Dhs</p>
                            </div>
                            <div className="cta">
                              <a href="#" className="buy-now-btn">Buy Now</a>
                            </div>
                            
                          </div> */}
                    </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Home