import React from 'react'
import SpecialProduct from './SpecialProduct'

export default function SpecialProducts() {
  return (
<div className="well well-small">
  <h3>New Products </h3>
  <hr className="soften" />
  <div className="row-fluid">
    <div id="newProductCar" className="carousel slide">
      <div className="carousel-inner">
        <div className="item active">
          <ul className="thumbnails">
           <SpecialProduct></SpecialProduct>
           <SpecialProduct></SpecialProduct>
           <SpecialProduct></SpecialProduct>
           <SpecialProduct></SpecialProduct>
          </ul>
        </div>
        
      </div>
      <a className="left carousel-control" href="1bnewProductCar" data-slide="prev">‹</a>
      <a className="right carousel-control" href="1bnewProductCar" data-slide="next">›</a>
    </div>
  </div>

</div>

  )
}
