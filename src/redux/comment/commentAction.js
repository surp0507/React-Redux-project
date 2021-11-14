import { Get_Comment } from "./commentType"

export const GetComments= (payload) => {
  return {
    type:Get_Comment ,
    payload
    }
}