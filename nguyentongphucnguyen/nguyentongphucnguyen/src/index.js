import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Shop';
import Admin from './Admin';
import Contact from './Shop/Components/features/Contact';

import Products from './Shop/Components/Products';
import Home from './Shop/Screens/home';
import ProductDetailScreens from './Shop/Screens/ProductDetailScreens';
import Dashboard from './Admin/components/Dashboard';
import Product from './Admin/components/Product';
import ProductList from './Admin/components/Product/ProductList';
import ProductAdd from './Admin/components/Product/ProductAdd';
import ProductEdit from './Admin/components/Product/ProductEdit';
import ProductTrash from './Admin/components/Product/ProductTrash';
import Cart from './Shop/Components/Products/Cart';
import AboutUs from './Shop/Components/features/AboutUs';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:'/',
    element:<Shop/>,
    children:[
      {
        index: true,
        element:<Home/>
      },
       {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/aboutus',
        element:<AboutUs />
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/products',
        element:<Products/>
      },
      {
        path: '/product/:slug',
        element:<ProductDetailScreens/>
      },
    ]
  },
  {
    path:'/admin',
    element:<Admin/>,
    children:[
      {
        index: true,
        element: <Dashboard/>
      },
      {
        path:'/admin/product',
        element: <Product/>,
        children:[
          {
            index: true,
            element: <ProductList/>
          },
          {
             path:'/admin/product/list/:page',
            element: <ProductList/>
          },
          {
            path:'/admin/product/add',
            element:<ProductAdd/>
          },
          {
            path:'/admin/product/edit/:id',
            element: <ProductEdit/>
          },
          {
            path:'/admin/product/trash/:page?',
            element: <ProductTrash/>
          },
        ]
      }
    ]
  }
])
root.render(    //render(hiển thị)
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
