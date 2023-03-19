import React from 'react'
import ProductName from '../product-data/ProductName';
import ProductStock from '../product-data/ProductStock';
import ProductPrice from '../product-data/ProductPrice';
import ProductCta from '../product-data/ProductCta';
import Rating from '../../global/Rating';


const ProductInfosSec = (props) => {
    const product = props.product;

    return (
    <div className="info-part">
        <ProductStock stock={product.stock} />
        <ProductName name={product.name}/>
        <Rating rate={product.rating} />
        <div className="pi--separator"></div>
        <ProductPrice curprice={product.curprice} oldprice={product.oldprice} />
        <ProductCta />
    </div>
  )
}

export default ProductInfosSec