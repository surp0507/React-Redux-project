import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { GetComments } from '../redux';

export class Comments extends Component {
  requestData = async () => {
    const {comid}=this.props.match.params
    console.log(comid)
    const response= await axios.get(`http://localhost:3004/posts/${comid}/comments`);
    this.props.GetComments(response.data)
    console.log(this.props.comments)
  }
  
  componentDidMount() {
    this.requestData();
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
    comments:state.comments
  }
}

const mapDispatchtoProps = {
  GetComments

}

export default connect(mapStatetoProps,mapDispatchtoProps)(Comments) ;

