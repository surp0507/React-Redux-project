import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchTodo } from '../redux/thunk/Todo';


  export class Todo extends Component {
    componentDidMount() {
      const {userid}=this.props.match.params
      const uid=userid
      console.log(uid)
      this.props.fetchTodo(uid)
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
     todos:state.todoReducer.todos
   }
 }

 const mapDispatchtoProps = {
   fetchTodo 
  }

export default connect(mapStatetoProps,mapDispatchtoProps)(Todo);


