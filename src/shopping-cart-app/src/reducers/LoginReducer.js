import { LOGIN_PAGE } from "../constants/ActionTypes";
import { GET_USERNAME } from "../constants/ActionTypes";
import { GET_PASSWORD } from "../constants/ActionTypes";
import { VALID_LOGIN } from "../constants/ActionTypes";

  const initialState={
    show:false,
    username:"",
    password:"",
    users:[]

  }
  export const loginReducer=(state = initialState,action)=>{
    switch(action.type){
      case LOGIN_PAGE:return{
      ...state,
      show:action.login
      }

      case GET_USERNAME:return{
        ...state,
        username:action.username 
      }
     
      case GET_PASSWORD:return{
       ...state,
       password:action.username

      }
      case VALID_LOGIN:return{
        ...state,
        users:action.users
       }
      default:return state;
    }

}
