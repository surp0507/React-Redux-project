import React, { Component } from 'react'
import {Button,Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../redux/thunk/Posts';
import { connect } from 'react-redux';

  export class Posts extends Component {
    componentDidMount() {
      const {postid}=this.props.match.params
      const id=postid
      this.props.fetchPosts(id)
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
     posts:state.postsReducer.posts
   }
 }

const mapDispatchtoProps = {
  fetchPosts
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Posts) ;
