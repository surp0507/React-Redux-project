import { Get_User } from '../Users/usersType'
import { Get_Name } from '../Users/usersType'
import { Get_Email } from '../Users/usersType'
import { Get_Phone } from '../Users/usersType'
import { Get_UserId } from '../Users/usersType'
import { Get_Show } from '../Users/usersType'
import { Get_ItemId } from '../Users/usersType'
import { SET_DATA } from '../Users/usersType'

const initialState = {
    newUser: [],
    name: {},
    email: {},
    phone: {},
    userId:{},
    show:false,
    Itemid:"",
    data:[]
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Get_User: return {
      ...state,
      newUser:action.payload
     }
    case Get_Name: return {
      ...state,
      name:action.payload
     }

    case Get_Email: return {
      ...state,
      email:action.payload
     }

    case Get_Phone: return {
      ...state,
      phone:action.payload
     }

    case Get_UserId: return {
      ...state,
      userId:action.payload
    }

    case Get_Show: return {
      ...state,
      show :action.payload
    }
    case Get_ItemId: return {
      ...state,
      Itemid :action.payload
    }

    case SET_DATA: return {
      ...state,
      data :action.payload
    }
     default: return state;
    }
  }

export default userReducer;