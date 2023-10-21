// import React, { useEffect } from 'react'
import Copyright from './Components/features/Copyright'
import GlobalNav from './Components/features/GlobalNav'
import Header from './Components/features/Header'
import TopNav from './Components/features/TopNav'
import Footer from './Components/Footer'
import SiderBar from './Components/Siderbar'
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/megamenu.css'
import { Outlet } from 'react-router-dom'
// import productApi from './../api/productApi'

export default function Shop() {
  // useEffect(()=> {
  //   const  fetchProducts = async()=>{
  //     var params ={
  //       search:'kem'
  //     }
  //     var $response = await productApi.getAll(params)
  //     console.log($response);
  //   }
  //   fetchProducts();
  // }, [])

  return (
    <>
       <TopNav/>
      <div className="container">
        <div id='gototop'></div>
        <Header/>
        <GlobalNav/>
        <div className="row">
          <SiderBar/>
          <div className="span9">
            <Outlet/>
          </div>
          

        </div>
            <Footer/>
      </div>
      <Copyright/>
    </>
   
  )
}
