import React from 'react';

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
              <span className="icon-home" /> Home
            </a>
            <a href="1b">
              <span className="icon-user" /> My Account
            </a>
            <a href="register.html">
              <span className="icon-edit" /> Free Register{' '}
            </a>
            <a href="contact.html">
              <span className="icon-envelope" /> Contact us
            </a>
            <a href="cart.html">
              <span className="icon-shopping-cart" /> 2 Item(s) -{' '}
              <span className="badge badge-warning"> $448.42</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}