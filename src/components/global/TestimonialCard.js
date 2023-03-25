import React from 'react'

const TestimonialCard = (props) => {
  const name = props.name;
  const content = props.content;
  return (
    <div className="testimonial-card">
        <div className="testimonial-content">
            <p className="testimonial-text">"{content}"</p>
            <p className="testimonial-name">{name}</p>
        </div>
    </div>
  )
}

export default TestimonialCard;