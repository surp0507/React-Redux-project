import axios from "axios";
import { GetUser } from "../Users/userAction";
 const user=axios.create({
    baseURL:"http://localhost:3004"
})

export const fetchUsers = ()=> async (dispatch) => {
    try {
      const response = await user.get('/users');
      dispatch(GetUser(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }

 


