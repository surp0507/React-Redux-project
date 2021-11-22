import {Get_Posts} from '../posts/postsType'

const initialState={
  posts:[]
}

const postsReducer=(state = initialState,action)=>{
    switch(action.type)
    {
        case Get_Posts:return{

            ...state,
            posts:action.payload
        }
        default: return state;
    }
}

export default postsReducer;