import React, { useEffect, useState } from 'react'
import Product from './Product'
import Loading from '../features/Loading';
import productApi from '../../../api/productApi';
export default function Products() {
  // khi loading dữ liệu xog loading = false
  const [loading, setLoading]= useState(true);

  //biến products sẽ chứa ds sản phẩm do Api cung cấp
  const [Products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchProducts = async() => {
      var response = await productApi.getAll();
      setLoading(false)
      setProducts(response.data);
    };
    fetchProducts()
  },[])

  var myView = loading === true?<Loading/>:
  (
    Products.map((product)=>{
       return <Product product={product} key = {product.id}/>
    })
  )

  return (
    <div className="well well-small">
      <h3>Our Products</h3>
      <div className="row">
        <ul className="thumbnails">{myView}</ul>
      </div>
    </div>
  );
}
