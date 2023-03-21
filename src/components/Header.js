import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    
    const [isLoggedIn , setIsLoggedIn] = useState(true)
    const header = useRef();


    const hideFirstRow = ()=>{
        if(window.pageYOffset >= 100){
           header.current.classList.add("scrolling");
        }
        else{
            header.current.classList.remove("scrolling");
        }
    }

    const checkIfLogged =()=>{
        if(isLoggedIn){
            return  <Link className='btn customer'>
                        <img src="media/images/icons/customer.svg" alt="" /><p className='customer-name'>Mohamed</p>
                    </Link>
        }
        else{
            return  <>
                        <Link className='btn login'>Login</Link>
                        <Link className='btn signup'>Sign up</Link>
                        <Link className='small-device-btn'><img src="media/images/icons/customer.svg" alt="" /></Link>
                    </>
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
                    <div className='col-wrapper '>
                        <p className='col-el'><a href="tel:+212690397001">+212 690397001</a></p>  
                        <p className='col-el'><a href="mailto:elabbouyisouhail@gmail.com">alkisaria-support@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div className="h-row h-row-second"> 
                <div className="container p-5">
                    <div className="col-wrapper logo">
                        <Link>
                        <img className='col-el logo-img' src="media/images/logo/al-kisaria-high-resolution-logo-black-on-transparent-background.png" alt="store logo" />
                        </Link>
                    </div>
                    <div className="col-wrapper search-input">
                        <input className='' type="search" name="search" id="search-bar" placeholder='Search for products...' />
                        <label className='' htmlFor="search-bar">
                            <img src="media/images/icons/search-white.svg" alt="search icon" />
                        </label>
                    </div>
                    <div className="col-wrapper carts">
                        <div className="col-el favorite">
                            <Link>
                                <img className='icon' src="media/images/icons/save-black.svg" alt="" />
                                <div className='txt'>
                                    <span className='count'>0</span>
                                    <p className='total'>Saved</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-el shopping-cart">
                            <Link>
                                <img className='icon' src="media/images/icons/cart-black.svg" alt="" />
                                <div className='txt'>
                                    <span className='count'>3</span>
                                    <p className='total'>126 $</p>
                                </div>
                            </Link>
                        </div>    
                    </div>
                    <div className="col-wrapper account">
                        {
                            checkIfLogged()
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;