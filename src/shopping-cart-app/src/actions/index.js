import shop from '../api/shop'
import user from '../api/user'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () =>
{
  return dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}
export const  loginAction=(login)=>{
  return{
    type:types.LOGIN_PAGE,
     login
  }

}

const validAction=(users)=>{
  return{
    type:types.VALID_LOGIN,
    users
  }
}

export const logData=()=>{
  return dispatch=>{
    user.loggedIn(users=>{
    dispatch(validAction(users))
    })
  }
}


  export const getUsername=(username)=>{
    return{
    type:types.GET_USERNAME,
    username
  }
 }

  export const getPassword=(password)=>{
    return{
    type:types.GET_PASSWORD,
    password
    }

  }


