import { Get_Todo } from "./todoType";

export const GetTodo = (payload) => {
  return {
    type:Get_Todo ,
    payload
    }
}
