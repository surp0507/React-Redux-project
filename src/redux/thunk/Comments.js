import { GetComments } from '../comment/commentAction';
import axios from 'axios'
export const fetchComments = (id)=> async (dispatch) => {
 
    try {
       
      const response = await axios.get(`http://localhost:3004/posts/${id}/comments`);
      dispatch(GetComments(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }