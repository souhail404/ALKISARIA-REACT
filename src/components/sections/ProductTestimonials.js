import React from 'react'
import TestimonialCard from '../global/TestimonialCard';


const ProductTestimonials = (props) => {
  const testimonials = props.testimonials
  return (
    <section className="product-testimonials p-5" id="product-testimonials">
        <div className="container">
            <div className="header-title">
                <p className="header-title-txt"> clients testimonials</p>
            </div>
            <div className="content">
                <div className="testimonials-wrapper">
                  {
                      testimonials.map(testimonial =>{
                        if(testimonial.display){
                          return <TestimonialCard content={testimonial.content} name={testimonial.name} />
                        }
                       })
                  }
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductTestimonials