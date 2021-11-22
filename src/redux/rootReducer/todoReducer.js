import {Get_Todo} from '../Todos/todoType'

const initialState={
  todos:[]
}

const todoReducer=(state = initialState,action)=>{
    switch(action.type)
    {
        case Get_Todo:return{

            ...state,
            todos:action.payload
        }
        default: return state;
    }
}

export default todoReducer;