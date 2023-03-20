import React from 'react'

const ShoppingCart = () => {
  return (
    <>
      <span className="h--icons h--icons-dd shopping-cart-icon" id="h--sci">
          <img src="media/images/icons/shopping cart.png" alt=""/>
          <img className="cancel-icon" src="media/images/icons/x.svg" alt=""/>
      </span>

      <div className="shopping-cart dd-menus" id="shopping-cart">
      <div className="container">
          {/* <div className="empty-cart">
              <div className="img">
                <img src="media/images/icons/shopping-cart-empty.png" alt=""/>
              </div>
              <div className="txt">
                <p>Your shopping cart is empty.</p>
                <p>Browse our categories and discover our best deals!</p>
              </div>
          </div>  */}
          
          <div className="full-cart">
            <div className="added-tc-wrapper">
              <div className="title">
                <p>added products :</p>
              </div>
              <div className="products">
                <div className="added-product">
                  <div className="img">
                      <img src="media/images/products/11.jpg" alt="product"/>
                  </div>
                  <div className="infos">
                      <div className="name">
                          <a href="" className="name-txt">Smartwatch Y68 Sport Bluetooth avec moniteur de fréquence cardiaque Android IOS</a>
                      </div>
                      <div className="price">
                          <p className="real-price">95.00 Dhs</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="total">
                <div className="total-txt">
                  <p>Total:</p>
                  <p>326.00 Dhs</p>
                </div>
                <div className="call-to-buy">
                  <a className="btn"  href="">Confirm & Buy</a>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </>
    
  )
}

export default ShoppingCart