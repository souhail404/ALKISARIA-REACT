import React from 'react'

import DealsWrapper from '../global/product/DealsWrapper';
import FeaturedProductsWrapper from '../global/product/FeaturedProductsWrapper';


const DealsAndFeatured = () => {
    return (
        <section className="deals-and-featured p-5" id="d-f-products">
            <div className="container">
                <DealsWrapper />
                <FeaturedProductsWrapper />  
            </div>
        </section>
    )
}

export default DealsAndFeatured