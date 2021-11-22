
import { setData } from "../Users/userAction";
import axios from "axios";

  const addUsers = (data)=> async (dispatch) => {
    const response = await axios.get(`http://localhost:3004/users`,{...data});
    dispatch(setData(response.data));
   }
 export default addUsers;