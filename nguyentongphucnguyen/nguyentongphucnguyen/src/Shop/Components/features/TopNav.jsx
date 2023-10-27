import React from 'react';
import { Link } from 'react-router-dom'

export default function TopNav() {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="topNav">
        <div className="container">
          <div className="alignR">
            <div className="pull-left socialNw">
              <a href="1b">
                <span className="icon-twitter" />
              </a>
              <a href="1b">
                <span className="icon-facebook" />
              </a>
              <a href="1b">
                <span className="icon-youtube" />
              </a>
              <a href="1b">
                <span className="icon-tumblr" />
              </a>
            </div>
            <a className="active" href="/">
              {' '}
              <span className="icon-home" /> Trang chủ
            </a>
            <a href="1b">
              <span className="icon-user" /> Tài khoản của tôi
            </a>
            <a href="register.html">
              <span className="icon-edit" /> Đăng ký{' '}
            </a>
            <Link to="/contact">
              <span className="icon-envelope"></span> Liên hệ chúng tôi
            </Link>
            <a href="cart.html">
              <span className="icon-shopping-cart" /> Giỏ hàng{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}