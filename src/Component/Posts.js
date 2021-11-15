import React, { Component } from 'react'
import axios from 'axios';
import {Button,Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GetPosts } from '../redux';
import { connect } from 'react-redux';

  export class Posts extends Component {
    requestData = async ()=>{
      const {post_id}=this.props.match.params;
      const response= await axios.get(`http://localhost:3004/users/${post_id}/posts`);
      this.props.GetPosts(response.data)
      console.log(this.props.posts)
    }
  
    componentDidMount() {
      this.requestData();
    }

    render() {
      if(!this.props.posts) return "Loading.."
      return (
        <div>
          <h2 className="text-center">Posts Details</h2>
            <Table variant="warning">
              <tr>
                <td>UserId</td>
                <td>PostId</td>
                <td>PostTitle</td>
              </tr>
              {this.props.posts.map((posts)=>(
              <tr>
                <td>{posts.userId}</td>
                <td> {posts.id}</td>
                <td>{posts.title}</td>
                <td>
                  <Link to={`/comment/${posts.id}`}>
                    <Button variant="info"> comments
                    </Button>
                  </Link>
                </td>
              </tr>
             ))}
          </Table>
       </div>
     )
   }
 }

 const mapStatetoProps =(state)=>{
  return{
    posts:state.posts
  }
}

const mapDispatchtoProps = {
  GetPosts

}

export default connect(mapStatetoProps,mapDispatchtoProps)(Posts) ;
