import React from 'react'
import TopNav from './components/TopNav'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom';

export default function Admin() {
  var ss = document.createElement("link");
  ss.rel = "stylesheet";
  ss.type ="text/css";
  ss.href="/admin/dist/css/adminlte.min.css";
  document.head.appendChild(ss);
  return (
<div className="wrapper">
  <TopNav/>
  <Menu/>
  <div className="content-wrapper">
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Outlet/>
          </div>
        </div>
      </div>
    </section>

  </div>

</div>

  )
}
