import React from 'react'
import ProductName from '../global/product/ProductName';
import ProductStock from '../global/product/ProductStock';
import ProductPrice from '../global/product/ProductPrice';
import ProductCta from '../global/product/ProductCta';
import Rating from '../global/Rating';


const ProductInfos = (props) => {
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

export default ProductInfos