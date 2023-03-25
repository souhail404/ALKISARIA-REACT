import React, { useState } from 'react'


import ProductCard from './cards/ProductCard';

const CollectionWrapper = (props) => {
    const title = props.title;
    const products = props.products;
    // const collection = props.collection;

    const [currentPage , setCurrentPage]= useState(1)
    const [postPerPage , setPostPerPage]= useState(8)

    return (
        <div className="collections-wrappers">
            <div className="wrapper-title">
                <h2 className="wrapper-title-txt">{title}</h2>
            </div>
            <div className="content">
                <div className="products-cards-wrapper">
                    {
                        products.map((product , index)=>{
                            // if(product.category == collection){
                            //     return <ProductCard key={index} name={product.title} price={product.price} rating={product.rating} imageSrc={product.images[0]}  />
                            // }
                            return <ProductCard 
                                        key={index} 
                                        name={product.title} 
                                        price={product.price} 
                                        rating={product.rating} 
                                        imageSrc={product.images[0]}  
                                    />
                        })
                    }
                </div>
            </div>
        </div>
  )
}

export default CollectionWrapper