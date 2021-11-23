import React from 'react'
import Home from './MyComponent/Home'
import Checkout from './MyComponent/Checkout'
import Logout from './MyComponent/Logout'
import Products from './MyComponent/Products'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from '../containers/Login'

export default function App() {
    return (
        <div>
          <BrowserRouter>
             <Routes> 
              <Route path="/"  element={<Login/>}/>
              <Route path="/product" element={<Products/>}/> 
              <Route path="/checkout" element={<Checkout/>}/> 
              <Route path="/logOut" element={<Logout/>}/> 
            </Routes>
          </BrowserRouter>
         
  
        </div>
    )
}
