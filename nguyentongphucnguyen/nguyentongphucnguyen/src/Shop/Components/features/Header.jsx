import React from 'react'

export default function Header() {
  return (
<div>
  <header id="header">
    <div className="row">
      <div className="span4">
        <h1>
          <a className="logo" href="index.html"><span>React Shop</span> 
            <img src="shop/assets/img/logo-bootstrap-shoping-cart.png" alt="bootstrap sexy shop" />
          </a>
        </h1>
      </div>
      <div className="span4">
        <div className="offerNoteWrapper">
          <h1 className="dotmark">
            <i className="icon-cut" />
            Thiên đường mỹ phẩm chính hãng
          </h1>
        </div>
      </div>
      <div className="span4 alignR">
        <p><br /> <strong> Support (24/7) :  0800 1234 678 </strong><br /><br /></p>
        <span className="btn btn-mini">[ 2 ] <span className="icon-shopping-cart" /></span>
        <span className="btn btn-warning btn-mini">$</span>
        <span className="btn btn-mini">£</span>
        <span className="btn btn-mini">€</span>
      </div>
    </div>
  </header>
</div>
  )
  }


