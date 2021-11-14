import { Get_Posts } from "./postsType";


export const GetPosts= (payload) => {
    
    
    return {
        type:Get_Posts ,
        payload
    }
}