import { Get_Comment } from "./commentType"

export const getComments= (payload) => {
  return {
    type:Get_Comment ,
    payload
    }
}