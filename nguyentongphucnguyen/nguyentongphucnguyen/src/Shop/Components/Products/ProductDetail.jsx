import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productApi from '../../../api/productApi';
import Loading from '../features/Loading';
import AppUrl from '../../../api/AppUrl';

export default function ProductDetail() {
  var {slug}= useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  useEffect(()=>{
    const fetchProduct = async ()=>{
      var response = await productApi.getBySlug(slug);
      console.log(response)
      setProduct(response)
      setLoading(false)
    }
    fetchProduct()
  },[])
  var myView=loading === true ? <Loading/>:
  (
<div className="well well-small">
  <div className="row-fluid">
    <div className="span5">
      <div id="myCarousel" className="carousel slide cntr">
        <div className="carousel-inner">
          <div className="item active">
            <a href="1b"> <img src={`${AppUrl.ImgUrl}${product.image}`} alt="1b" style={{width: '100%'}} /></a>
          </div>
          
        </div>
        <a className="left carousel-control" href="1bmyCarousel" data-slide="prev">‹</a>
        <a className="right carousel-control" href="1bmyCarousel" data-slide="next">›</a>
      </div>
    </div>
    <div className="span7">
      <h3>{product.product_name} [${product.price}]</h3>
      <hr className="soft" />
      <form className="form-horizontal qtyFrm">
        <div className="control-group">
          <label className="control-label"><span>${product.price}</span></label>
        </div>
        <div dangerouslySetInnerHTML={{__html:product.summary}} />
        
        <p>
          <button type="submit" className="shopBtn"><span className=" icon-shopping-cart" /> Add to cart</button>
        </p></form>
    </div>
  </div>
  <hr className="softn clr" />
  <div dangerouslySetInnerHTML={{__html:product.detail}} />
</div>
  )
  return (
    <>{myView}
    </>
    
  )
}
