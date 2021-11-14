import { Get_User } from '../Users/usersType'
import { Get_Name } from '../Users/usersType'
import { Get_Email } from '../Users/usersType'
import { Get_Phone } from '../Users/usersType'
import { Get_UserId } from '../Users/usersType'
import { Get_Todo } from '../Todos/todoType'
import { Get_Posts } from '../posts/postsType'
import { Get_Comment } from '../comment/commentType'
import { Get_Show } from '../Users/usersType'

const initialState = {
    newUser: [],
    name: {},
    email: {},
    phone: {},
    userId:{},
    todos:[],
    posts:[],
    comments:[],
    show:false
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

        case Get_Todo: return {
            ...state,
            todos:action.payload
        }

        case Get_Posts: return {
            ...state,
            posts:action.payload
        }

        case Get_Comment: return {
            ...state,
            comments :action.payload
        }

        case Get_Show: return {
            ...state,
            show :action.payload
        }
        default: return state;
    }
    
}

export default userReducer;