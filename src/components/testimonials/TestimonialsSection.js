import React from 'react'
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section className="product-testimonials p-5" id="product-testimonials">
        <div className="container">
            <div className="header-title">
                <p className="header-title-txt"> clients testimonials</p>
            </div>
            <div className="content">
                <div className="testimonials-wrapper">
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>                                     
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialsSection