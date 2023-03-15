import React from 'react'

const Header = () => {
  return (
      <header>
        <div className="header-wrapper p-5">
            <div className="logo-wrapper">
                <a href="/">
                    <a href="/">
                        <img src="media/images/logo/al-kisaria-high-resolution-logo-black-on-transparent-background.png" alt="Logo"/>
                    </a>
                    {/* <!-- <p class="logo-p">AL KISARIA</p> --> */}
                </a>
            </div>

            <nav>
                <div className="navlinks-wrapper">
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Coming Soon</a></li>
                    </ul>
                </div>
                
            </nav>

            <div className="cart-login-wrapper">
                <span className="h--icons client-account-icon" id="h--ca" ><img src="media/images/icons/person.png" alt=""/></span>
                <span className="h--icons h--icons-dd shopping-cart-icon" id="h--sci"><img src="media/images/icons/shopping cart.png" alt=""/><img className="cancel-icon" src="media/images/icons/x.svg" alt=""/></span>
            </div>
        </div>
      </header>
  );
};

export default Header;