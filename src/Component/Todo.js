import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { GetTodo } from '../redux';

  export class Todo extends Component {
    requestData = async ()=> {
      const {user_id}=this.props.match.params
      console.log(user_id);
      const response= await axios.get(`http://localhost:3004/users/${user_id}/todos`);
      this.props.GetTodo(response.data);
      console.log(this.props.todos)
    }
                        
    componentDidMount() {
      this.requestData();
    }
  
    render() {
      if(!this.props.todos) return "Loading..."
      return (
        <div>
          <h2 className="text-center" >Todo Details</h2>
          <Table >
            <tr>
              <td>UserId</td>
              <td>TodoId</td>
              <td>TodoTitle</td>
            </tr>
            {this.props.todos.map((todos)=>(
              <tr>
                <td>{todos.userId}</td>
                <td>{todos.id}</td>
                <td>{todos.title}</td>
              </tr>
              ))}
          </Table>
        </div>
      )
   }
 }

 const mapStatetoProps =(state)=>{
   return{
  todos:state.todos
   }
 }

 const mapDispatchtoProps = {
   GetTodo,

}

export default connect(mapStatetoProps,mapDispatchtoProps)(Todo);


