import { Get_Todo } from "./todoType";

export const getTodo = (payload) => {
  return {
    type:Get_Todo ,
    payload
    }
}
