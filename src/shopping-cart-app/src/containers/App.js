import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Product from '../components/Product'
import Login from './Login'
import Logout from './Logout'
import Hitory from './History'


const App = () => (
  <div>

 <BrowserRouter>

 <Routes> 
   <Route path="/" element={<Login/>}/>
 <Route path="/products" element={<Product/>}/>
 <Route path="/productcontainer" element={<ProductsContainer />}/>
 <Route path="/cartcontainer" element={  <CartContainer />}/>
 <Route path="/logout" element={<Logout/>}/>
 <Route path="/history" element={<Hitory/>}/>
 </Routes>
  </BrowserRouter>

  
  </div>
)

export default App
