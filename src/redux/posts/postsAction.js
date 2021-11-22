import { Get_Posts } from "./postsType";

export const getPosts= (payload) => {
  return {
    type:Get_Posts ,
    payload
    }
}