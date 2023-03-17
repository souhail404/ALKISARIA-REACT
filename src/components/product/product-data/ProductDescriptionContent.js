import React from 'react'

const ProductDescriptionContent = (props) => {
  const description = props.description;
  return (
    <div className="d-content">
        {description}
    </div>
  )
}

export default ProductDescriptionContent