import axios from 'axios'
import { GetTodo } from "../Todos/todoAction";

export const fetchTodo = (id)=> async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3004/users/${id}/todos`);
    console.log(id)
      dispatch(GetTodo(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  } 