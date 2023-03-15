import React from 'react'
import TestimonialCard from './TestimonialCard';
import testimonilsData from './testimonials.json'

const TestimonialsSection = () => {
  return (
    <section className="product-testimonials p-5" id="product-testimonials">
        <div className="container">
            <div className="header-title">
                <p className="header-title-txt"> clients testimonials</p>
            </div>
            <div className="content">
                <div className="testimonials-wrapper">
                  <TestimonialCard content={testimonilsData[1].content} name={testimonilsData[1].name} />
                  <TestimonialCard content={testimonilsData[2].content} name={testimonilsData[2].name} />
                  <TestimonialCard content={testimonilsData[3].content} name={testimonilsData[3].name} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialsSection