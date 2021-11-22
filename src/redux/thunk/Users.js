import axios from "axios";
import { GetUser } from "../Users/userAction";

export const fetchUsers = ()=> async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3004/users');
      dispatch(GetUser(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }

 


