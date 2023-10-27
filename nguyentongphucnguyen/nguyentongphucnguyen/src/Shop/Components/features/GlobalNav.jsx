import React from 'react'
import { Link } from 'react-router-dom'

export default function GlobalNav() {
  return (
<div className="navbar">
  <div className="navbar-inner">
    <div className="container">
      <a href="1b" data-toggle="collapse" className="btn btn-navbar">
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </a>
      <div className="nav-collapse">
        <ul className="nav">
          <li className="active"><Link to='/'>Home</Link></li>
          <li ><Link>Đảm bảo chất lượng</Link></li>
          <li ><Link>Mở hộp kiểm tra nhận hàng</Link></li>
          <li ><Link>Vận chuyển</Link></li>
        </ul>
        <form action="#" className="navbar-search pull-left">
          <input type="text" placeholder="Tìm kiếm" className="search-query span2" />
        </form>
        <ul className="nav pull-right">
          <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="1b"><span className="icon-lock" /> Đăng nhập <b className="caret" /></a>
            <div className="dropdown-menu">
              <form className="form-horizontal loginFrm">
                <div className="control-group">
                  <input type="text" className="span2" id="inputEmail" placeholder="Email" />
                </div>
                <div className="control-group">
                  <input type="password" className="span2" id="inputPassword" placeholder="Mật khẩu" />
                </div>
                <div className="control-group">
                  <label className="checkbox">
                    <input type="checkbox" /> Ghi nhớ đăng nhập
                  </label>
                  <button type="submit" className="shopBtn btn-block">Đăng nhập</button>
                </div>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}
