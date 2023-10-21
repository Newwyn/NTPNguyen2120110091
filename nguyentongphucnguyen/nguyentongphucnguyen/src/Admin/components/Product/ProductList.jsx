import React from 'react'
import { useEffect, useState } from 'react'
import Loading from '../../../Shop/Components/features/Loading';
import productApi from '../../../api/productApi';
import { Link, useParams } from 'react-router-dom';
import Paginate from '../Paginate';
export default function ProductList() {
    // khi loading dữ liệu xog loading = false
  const [loading, setLoading]= useState(true);

  //biến products sẽ chứa ds sản phẩm do Api cung cấp
  const [Products, setProducts] = useState([]);

  const [meta, setMeta] = useState({});
  const {page} =useParams();

  //các biến cho delete
  const[msgSuccess, setSuccessMsg] = useState('')
  const[msgWarning, setWarningMsg] = useState('')
  const[loadData, setLoadData]=useState(1);

  const handleDelete=(event)=>{
    event.target.classList.remove('fa-trash')
    event.target.classList.add('fa-spinner')
    const delProduct= async (id)=>{ 
      try{
        await productApi.del(id)
        setSuccessMsg('XOÁ THÀNH CÔNG Id='+ id)
        setLoadData(loadData+1)
      }catch(error){
        setWarningMsg('XOÁ KHÔNG THÀNH CÔNG Id=' +id+' '+ error)

      }finally{
        event.target.classList.remove('fa-spinner')
    event.target.classList.add('fa-trash')
      }
    }
    delProduct(event.target.getAttribute('name'))
  }


  useEffect(()=>{
    const fetchProducts = async() => {
      var param = {
          page: page 
      }
      var response = await productApi.getAll(param);
      setLoading(false)
      setProducts(response.data);
      setMeta(response.meta);
    };
    fetchProducts()
  },[page, loadData])
  var allBtnDel=document.querySelectorAll('.btn-del');
  allBtnDel.forEach(btnDel=>{
    btnDel.addEventListener('click',handleDelete)
  })


  var myView = loading === true? <tr><td><Loading/></td></tr>:
  (
    Products.map((product)=>{
       return(
         <tr className="odd" key={product.id}>
            <td >{product.id}</td>
            <td >{product.product_name}</td>
            <td >{product.slug}</td>
            <td >{product.cat_id}</td>
            <td >{product.brand_id}</td>
            <td >{product.status}</td>
            <td >{product.price}</td>
            <td><i className="fas fa-eye"></i> <i className="fas fa-edit"></i> <i name={product.id} className="btn-del fas fa-trash"></i> </td>
          </tr>
       )
    })
  )

  var myView1=loading===true?<tr><td><Loading/></td></tr>:
  (
     <Paginate meta={meta} basePath='/admin/product/list/' />
  )

  return (
<div>
<div className="row">
  <div className="col-12">
    <p className='btn btn-secondary'><Link to='/admin/product/add'>Create Product</Link></p>
  </div>
  <div className="col-12">
    <p className='bg-success'>{msgSuccess}</p>
    <p className='bg-warning'>{msgWarning}</p>
  </div>
  <div className="card">
      <div className="card-header">
        <h3 className="card-title">PRODUCT LIST</h3>
      </div>
      <div className="card-body">
        <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">
          <div className="row"><div className="col-sm-12 col-md-6" />
          <div className="col-sm-12 col-md-6" />
        </div>
        <div className="row">
          <div className="col-sm-12">
            <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                <thead>
                  <tr>
                    <th className="sorting sorting_asc" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">Id</th>
                    <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Browser: activate to sort column ascending">Product Name</th>
                    <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Platform(s): activate to sort column ascending">Slug</th>
                    <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Engine version: activate to sort column ascending">Category Id</th>
                    <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending">brand Id</th>
                    <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Engine version: activate to sort column ascending">Statur</th>
                    <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending">Price</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                    {myView}
                </tbody>
              </table></div></div>
                {myView1}
                </div>
              {/* <div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="example2_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="example2_previous"><a href="#" aria-controls="example2" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={6} tabIndex={0} className="page-link">6</a></li><li className="paginate_button page-item next" id="example2_next"><a href="#" aria-controls="example2" data-dt-idx={7} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div> */}

    </div>

  </div>
</div>
</div>
  )
}
