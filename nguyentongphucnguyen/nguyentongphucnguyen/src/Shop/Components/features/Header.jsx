import React from 'react'

export default function Header() {
  return (
<div>
  <header id="header">
    <div className="row">
      <div className="span4">
        <h1>
          <a className="logo" href="index.html"><span>Newwyn Shop</span> 
            <img src="shop/assets/img/logo2.png" alt="Newwyn" />
          </a>
        </h1>
      </div>
      <div className="span4">
        <div className="offerNoteWrapper">
          <h1 className="dotmark">
            <i className="icon-cut" />
            Thế giới đồ chơi Công Nghệ chính hãng
          </h1>
        </div>
      </div>
      <div className="span4 alignR">
        <p><br /> <strong> Hotline hỗ trợ (24/7) :  0000 999 333 </strong><br /><br /></p>
      </div>
    </div>
  </header>
</div>
  )
  }


