import React from 'react'
import Banners from '../components/sections/Banners';
import Collections from '../components/sections/Collections';
import DealsAndFeatured from '../components/sections/DealsAndFeatured';



const Home = () => {
  return (
    <>
      <Banners />
      <DealsAndFeatured />
      <Collections />
    </>
  )
}


export default Home;