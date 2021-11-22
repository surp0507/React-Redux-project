import axios from 'axios'
import { getTodo } from "../Todos/todoAction";

export const fetchTodo = (id)=> async (dispatch) => {
  const response = await axios.get(`http://localhost:3004/users/${id}/todos`);
  dispatch(getTodo(response.data));
 } 