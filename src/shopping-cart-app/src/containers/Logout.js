import React from 'react'
import {Button,Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Logout() {
  return (
    <div>
      <div className="text-center">
        <Alert>You are LoggedIn</Alert>
      </div>
      <Link to="/productcontainer"> Products</Link>
      <Link to="/cartcontainer"> Checkout</Link>
      <Link to="/history"> History</Link>
        <hr />
      <Link to="/">
      <Button className="my-3">
        LogOut
      </Button>
      </Link> 
     </div>
    )
}
