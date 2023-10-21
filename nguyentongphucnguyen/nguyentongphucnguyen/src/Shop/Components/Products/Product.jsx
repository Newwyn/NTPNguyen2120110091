import React from 'react'
import AppUrl from '../../../api/AppUrl';

export default function Product(prop) {
  var product = prop.product;
  return (
  <li className="span3">
        <div className="thumbnail">
          <a href={`/product/${product.slug}`} className="overlay"> </a>
          <a className="zoomTool" href="product_details.html" title="add to cart" style={{display: 'none'}}><span className="icon-search" /> QUICK VIEW</a>
          <a href={`/product/${product.slug}`}><img src={`${AppUrl.ImgUrl}${product.image}/`} alt="1b" /></a>
          <div className="caption cntr">
            <p>{product.product_name}</p>
            <p><strong> ${product.price}</strong></p>
            <h4><a className="shopBtn" href="1b" title="add to cart"> Add to cart </a></h4>
            
            <br className="clr" />
          </div>
        </div>
      </li>
  )
}