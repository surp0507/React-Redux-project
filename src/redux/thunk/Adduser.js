
import { setData } from "../Users/userAction";
import axios from "axios";

 const addUsers = (data)=> async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3004/users`,{...data});
      dispatch(setData(response.data));
      console.log(data)
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }

  export default addUsers;