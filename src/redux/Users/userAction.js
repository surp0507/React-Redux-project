import { Get_User } from './usersType'
import { Get_Name } from './usersType'
import { Get_Email } from './usersType'
import { Get_Phone } from './usersType'
import { Get_UserId } from './usersType'
import { Get_Show } from './usersType'
import { Get_ItemId } from './usersType'

export const GetUser = (payload) => {
  return {
    type: Get_User,
    payload
    }
}

export const GetName = (payload) => {
  return {
    type: Get_Name,
    payload
    }
}

export const GetEmail = (payload) => {
  return {
    type: Get_Email,
    payload
    }
}

export const GetPhone = (payload) => {
  return {
    type: Get_Phone,
    payload
    }
}

export const GetUserId = (payload) => {
  return {
    type: Get_UserId,
    payload
    }
}

export const GetShow = (payload) => {
  return {
    type: Get_Show,
    payload
    }
}

export const GetItem = (payload) => {
  return {
    type: Get_ItemId,
    payload
    }
}


