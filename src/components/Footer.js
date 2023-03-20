import React from 'react'
import Instagram from './icons/links/Instagram'
import Twitter from './icons/links/Twitter'
import Facebook from './icons/links/Facebook'



const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="content">
          <div className="row first-row row1">
            <div  className="sub-row">
              <img src="media/images/logo/al-kisaria-high-resolution-logo-white-on-transparent-background.png" alt=""/>
            </div>
            <div className="sub-row">
              <div>
                <h2>FIND US ON :</h2>
              </div>
              <ul>
                <li className="social-media"> <Instagram link='' /> </li>
                <li className="social-media"> <Facebook link= '' /> </li>
                <li className="social-media"> <Twitter link= '' /> </li>
              </ul>
            </div>
            <div className="sub-row">
              <div>
                <p className="copy-right"> <span>©</span>  2022-2023 <a href="">ALKISARIA</a> All Rights Reserved</p>
              </div>
            </div>
          </div>
          <div className="row row2">
              <div className="row-title">
                <h2>About</h2>
              </div>
              <div className="row-content">
                <a href="">Services</a>
                <a href="">Partnerships</a>
                <a href="">Privacy & policy</a>
              </div>  
          </div>
          <div className="row row3">
              <div className="row-title">
                <h2>Support</h2>
              </div>
              <div className="row-content">
                <a href="">Terms & Conditions</a>
                <a href="">Help</a>
                <a href="">Support</a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer