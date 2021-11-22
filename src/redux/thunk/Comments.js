import { getComments } from '../comment/commentAction';
import axios from 'axios'
 
  export const fetchComments = (id)=> async (dispatch) => {
    const response = await axios.get(`http://localhost:3004/posts/${id}/comments`);
    dispatch(getComments(response.data));
  }