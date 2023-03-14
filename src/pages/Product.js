import React from 'react'

const About = () => {
  return (
    <>
       {/* <!-- product data --> */}
        <section className="product-data-page p-5" id="product-data-page">
            <div className="container">
                <div className="content">
                    <div className="row product-media">
                      <div className="pp--slider-wrapper">
                          <div className="main-img">
                            <img className=".m-img" src="" alt=""/>
                              <div className="main-click-rl">
                              <span className="slide-btn slide-btn-l"><img src="media/images/icons/chevron-left.svg" alt=""/></span>
                              <span className="slide-btn slide-btn-r"><img src="media/images/icons/chevron-right.svg" alt=""/></span>
                            </div>
                          </div>
                          
                          <div className="slider-imgs">
                            <div className="imgs">
                              <div className="img"><img src="media/images/products/7.jpg" alt=""/></div>
                              <div className="img"><img src="media/images/products/6.jpg" alt=""/></div>
                              <div className="img"><img src="media/images/products/12.jpg" alt=""/></div>
                              <div className="img"><img src="media/images/products/8.jpg" alt=""/></div>
                              <div className="img"><img src="media/images/products/9.jpg" alt=""/></div>
                              <div className="img"><img src="media/images/products/10.jpg" alt=""/></div>
                              <div className="img"><img src="media/images/products/11.jpg" alt=""/></div>
                            </div>
                            <div class="click-rl">
                              <span className="slide-btn slide-btn-l"><img src="media/images/icons/chevron-left.svg" alt=""/></span>
                              <span className="slide-btn slide-btn-r"><img src="media/images/icons/chevron-right.svg" alt=""/></span>
                            </div>
                          </div>
                      </div>   
                    </div>  
                    <div className="row product-infos">
                        <div className="info-part">
                            <div className="pi--stock"> 
                              <p>18 in stock</p>
                            </div>
                            <div className="pi--name">
                              <p className="pi--name-txt">pack 3 ensemble de boîte de rangement pour sous-vêtement multi-grilles pliable</p>
                            </div>
                            <div className="pi--rating">
                              <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                              <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                              <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                              <span className="star"><img src="media/images/icons/star-full.svg" alt=""/></span>
                              <span className="star"><img src="media/images/icons/star-regular.svg" alt=""/></span>
                              <span className="staring-number">(36)</span>
                            </div>
                            <div className="pi--separator"></div>
                            <div className="pi--price">
                              <p className="real-price">91.50 Dhs</p>
                              <p className="old-price">129.00 Dhs</p>
                            </div>
                            <div className="pi--cta">
                              <div className="col col1">
                                <a href="" className="cta-btn buynow"> <p>Buy now</p> </a>
                                <a href="" className="cta-btn fav" > <img src="media/images/icons/love-svgrepo-com.svg" alt=""/> </a>
                              </div>
                              <div className="col col2">
                                <a href="" className="cta-btn addtc"> <p>Add to Cart</p> </a>
                              </div>
                            </div>
                        </div>
                        <div className="description-part">
                          <div className="header-title">
                            <p className="header-title-txt">product description</p>
                          </div>
                          <div className="description-content-wrapper">
                              <div className="d-content">
                                <p>
                                  Le Blender BLENDFORCE est le parfait allié  Il est doté d'un moteur de 600W, d'un BOL d'une capacité totale de 2L avec lames amovibles, d'accessoires Moulin à café.Son système Air Cooling permet au moteur de rester frais lors de la préparation de vos boissons ou pâtes.Ce produit est doté de 2 vitesses ainsi que d'une option pulse.Grace à ces lames Zelkrom, vous pourrez préparer en toute facilité de la glace piléeLe produit est doté d'un système de sécurité : le moteur s'enclenche seulement quand le bol est bien verrouillé. Les lames sont amovibles et compatibles lave-vaisselle.
                                </p>
                                <p>
                                  Le Blender BLENDFORCE est le parfait allié  Il est doté d'un moteur de 600W, d'un BOL d'une capacité totale de 2L avec lames amovibles, d'accessoires Moulin à café.Son système Air Cooling permet au moteur de rester frais lors de la préparation de vos boissons ou pâtes.Ce produit est doté de 2 vitesses ainsi que d'une option pulse.Grace à ces lames Zelkrom, vous pourrez préparer en toute facilité de la glace piléeLe produit est doté d'un système de sécurité : le moteur s'enclenche seulement quand le bol est bien verrouillé. Les lames sont amovibles et compatibles lave-vaisselle.
                                </p>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* testimonials */}
        <section className="product-testimonials p-5" id="product-testimonials">
            <div className="container">
                <div className="header-title">
                  <p className="header-title-txt"> clients testimonials</p>
                </div>
                <div className="content">
                  <div className="testimonials-wrapper">
                    <div className="testimonial-card">
                      {/* <!-- <div className="testimonial-image">
                        <img src="https://example.com/image.jpg" alt="Client Image"/>
                      </div> --> */}
                      <div className="testimonial-content">
                        <p className="testimonial-text">"I was blown away by the professionalism and expertise of the team at ALKISARIA Company. They were able to help me increase my online presence and generate more leads for my business. I highly recommend their services!"</p>
                        <p className="testimonial-name">John Doe</p>
                      </div>
                    </div>
                    <div class="testimonial-card">
                      {/* <!-- <div class="testimonial-image">
                        <img src="https://example.com/image.jpg" alt="Client Image"/>
                      </div> --> */}
                      <div className="testimonial-content">
                        <p className="testimonial-text">"I couldn't be happier with the results of my recent home renovation. Thanks to ALKISARIA Construction, my home now looks better than ever. Their attention to detail and commitment to quality is truly impressive."</p>
                        <p className="testimonial-name">Sarah M</p>
                      </div>
                    </div> 
                    <div className="testimonial-card">
                      {/* <!-- <div class="testimonial-image">
                        <img src="https://example.com/image.jpg" alt="Client Image"/>
                      </div> --> */}
                      <div className="testimonial-content">
                        <p className="testimonial-text">"The customer service at ALKISARIA Corporation is top-notch. They really went above and beyond to make sure I was satisfied with my purchase. I will definitely be a repeat customer!"</p>
                        <p className="testimonial-name">Michael B</p>
                      </div>
                    </div>                    
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About