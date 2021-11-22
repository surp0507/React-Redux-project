import { GetPosts } from "../posts/postsAction";
import axios from 'axios'

export const fetchPosts = (id)=> async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3004/users/${id}/posts`);
    dispatch(GetPosts(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }