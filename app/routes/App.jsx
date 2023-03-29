import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './Home/Home'
import Product from './Product/Product'
import Products from './Products/Products'


    const Router = createBrowserRouter([{
      path:"/",
      Element: <Home/>
    }])

export default function App() {
      return (
      <div>
        <RouterProvider router={Router}/>
      </div>
  )
}
