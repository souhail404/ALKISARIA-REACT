import React from 'react'
import ProductDescriptionContent from '../product-data/ProductDescriptionContent';

const ProductDescriptionSec = (props) => {
  const description = props.description;
  return (
    <div className="description-part">
        <div className="header-title">
            <p className="header-title-txt">product description</p>
        </div>
        <div className="description-content-wrapper">
            <ProductDescriptionContent description={description} />
        </div>
    </div>
  )
}

export default ProductDescriptionSec