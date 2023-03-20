import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    
    const header = useRef();
    
    const hideFirstRow = ()=>{
        console.log()
        if(window.pageYOffset >= 150){
           header.current.classList.add("scrolling");
        }
        else{
            header.current.classList.remove("scrolling");
        }
    }

    useEffect(()=>{
        hideFirstRow()
        window.addEventListener('scroll' , ()=>hideFirstRow())
        return(
            window.removeEventListener('scroll' , ()=>hideFirstRow())
        )
    });

    return (
        <header ref={header}>
            <div className="h-row h-row-first">
                <div className="container p-5">
                    <div className='col-wrapper'>
                        <p className='col-el'>Free delivery on all products</p>
                    </div>
                    <div className='col-wrapper'>
                        <p className='col-el'>Hotline: <a href="tel:+212690397001">+212 690397001</a></p>  
                        <p className='col-el'>Email: <a href="mailto:elabbouyisouhail@gmail.com">alkisaria@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div className="h-row h-row-second"> 
                <div className="container p-5">
                    <div className="col-wrapper logo">
                        <img className='col-el logo-img' src="media/images/logo/al-kisaria-high-resolution-logo-white-on-transparent-background.png" alt="store logo" />
                    </div>
                    <div className="col-wrapper search-input">
                        <input className='col-el' type="search" name="search" id="search-bar" placeholder='Search for products...' />
                        <label className='col-el' htmlFor="search-bar">
                            <img src="media/images/icons/search-white.svg" alt="search icon" />
                        </label>
                    </div>
                    <div className="col-wrapper carts">
                        <div className="col-el favorite">
                            <Link>
                                <img className='icon' src="media/images/icons/favorite.svg" alt="" />
                                <div className='txt'>
                                    <span className='count'>0</span>
                                    <p className='total'>Wishlist</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-el shopping-cart">
                            <Link>
                                <img className='icon' src="media/images/icons/shopping-cart.svg" alt="" />
                                <div className='txt'>
                                    <span className='count'>0</span>
                                    <p className='total'>00 Dhs</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-row h-row-third"> 
                <div className="container">
                    <div className="col-wrapper navlinks">
                        <div className="col-el">
                            <Link>Home</Link>
                        </div>
                        <div className="col-el">
                            <Link>Shop <img src="media/images/icons/expand-arrow-black.svg" alt="" /> </Link>
                        </div>
                        <div className="col-el">
                            <Link>Blog</Link>
                        </div>
                        <div className="col-el">
                            <Link>Contact</Link>
                        </div>
                    </div>
                </div>
            </div> 
        </header>
    );
};

export default Header;