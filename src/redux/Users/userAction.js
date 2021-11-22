import { Get_User } from './usersType'
import { Get_Name } from './usersType'
import { Get_Email } from './usersType'
import { Get_Phone } from './usersType'
import { Get_UserId } from './usersType'
import { Get_Show } from './usersType'
import { Get_ItemId } from './usersType'
import { SET_DATA } from './usersType'



export const setData=(payload)=>{
  return{
    type:SET_DATA,
    payload
  }


}

export const getUser = (payload) => {
  return {
    type: Get_User,
    payload
    }
}

export const getName = (payload) => {
  return {
    type: Get_Name,
    payload
    }
}

export const getEmail = (payload) => {
  return {
    type: Get_Email,
    payload
    }
}

export const getPhone = (payload) => {
  return {
    type: Get_Phone,
    payload
    }
}

export const getUserId = (payload) => {
  return {
    type: Get_UserId,
    payload
    }
}

export const getShow = (payload) => {
  return {
    type: Get_Show,
    payload
    }
}

export const getItem = (payload) => {
  return {
    type: Get_ItemId,
    payload
    }
}


