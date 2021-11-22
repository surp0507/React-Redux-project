import axios from "axios";
import { getUser } from "../Users/userAction";

  export const fetchUsers = ()=> async (dispatch) => {
   const response = await axios.get('http://localhost:3004/users');
   dispatch(getUser(response.data));
  }

 


