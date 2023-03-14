import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <div className='app' id='app'>
      <div className='main app-main' >
        <Header/>
        <Outlet/> 
      </div>
        <Footer/>
      
      
    </div>
  )
}

export default Layout