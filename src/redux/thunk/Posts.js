import { getPosts } from "../posts/postsAction";
import axios from 'axios'

export const fetchPosts = (id)=> async (dispatch) => {
  const response = await axios.get(`http://localhost:3004/users/${id}/posts`);
  dispatch(getPosts(response.data));
} 
   