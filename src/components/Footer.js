import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="main">
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
                      <li className="social-media"> <a href=""><img src="media/images/icons/instagram (4).svg" alt=""/></a>  </li>
                      <li className="social-media"> <a href=""><img src="media/images/icons/facebook (3).svg" alt=""/> </a> </li>
                      <li className="social-media"> <a href=""><img src="media/images/icons/twitter (2).svg" alt=""/></a>  </li>
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
      </div>
    </footer>
  )
}

export default Footer