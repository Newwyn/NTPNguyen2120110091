import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
      <h2>QUẢN LÝ PRODUCT</h2>
      <Outlet/>
    </div>
  )
}
