import {Get_Comment} from '../comment/commentType'

  const initialState = {
    comments:[],
  }

   const commentsReducer=(state = initialState,action)=>{
     switch(action.type){
       case Get_Comment:return{
         ...state,
         comments:action.payload
        }
        default: return state;
     }
 }

export default commentsReducer;