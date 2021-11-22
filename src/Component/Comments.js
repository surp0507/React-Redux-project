import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchComments } from '../redux/thunk/Comments';


export class Comments extends Component {

  componentDidMount() {
    const {comid}=this.props.match.params
    const id=comid
    this.props.fetchComments(id)
  }
    
 render() {
  if(!this.props.comments) return "Loading.."
  return (
    <div>
      <h2 className="text-center ">Comments Details</h2>
        <Table border="1px" className="mx-auto my-5">
          <tr >
            <td>postId</td>
            <td>email</td>
            <td>name</td>
          </tr>
          { this.props.comments.map((comment) => (
            <tr>
              <td>{comment.postId}</td>
              <td>{comment.email}</td>
              <td>{comment.name}</td>
            </tr>
           ))}
        </Table>
      </div>
     )
   }
}

const mapStatetoProps =(state)=>{
  return{
    comments:state.commentsReducer.comments
  }
}

const mapDispatchtoProps = {
fetchComments
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Comments) ;

