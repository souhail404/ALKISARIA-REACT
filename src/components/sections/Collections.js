import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';

import CollectionWrapper from '../global/product/CollectionWrapper'


const Collections = () => {
  
  const { data, loading, error} = useFetch("https://dummyjson.com/products");
  if (error){
      console.log(error);
  };  

  return (
    <section className="products-listing p-5" id="products-listing">
        <div className="container">
            {/* {data && <CollectionWrapper title="smartphones" collection="smartphones" products={data.products} />}
            {data && <CollectionWrapper title="skin care" collection="skincare" products={data.products} />}
            {data && <CollectionWrapper title="motorcycle" collection="motorcycle" products={data.products} />} */}
            {data && <CollectionWrapper title="new products"  products={data.products} />}
        </div>
    </section>
  )
}

export default Collections