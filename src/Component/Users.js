import React, { Component } from 'react'
import { Button,Modal,Table} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getUser,getName,getEmail,getPhone,getUserId,getShow,getItem } from '../redux';
import {connect} from 'react-redux'
import { fetchUsers} from '../redux/thunk/Users';
import { setData } from '../redux/Users/userAction';
import addUsers from '../redux/thunk/Adduser';

  export class Users extends Component {    
   
    handleClose = () =>{
      this.props.getShow(false);
  }

    handleShow = () =>{
      this.props.getShow(true);
  }

 
  componentDidMount() {
    this.props.fetchUsers()
  }

  selectUser = (Id) => {
    this.props.getShow(true)
    const {newUser}=this.props
    console.log(newUser[Id-1])
    const item=newUser[Id-1]
    this.props.getName(item.name);
    this.props.getEmail(item.email);
    this.props.getPhone(item.phone);
    this.props.getUserId(item.id);
    this.props.getItem(item.id)
   }
  
  updateUser = async () => {
    const {name,email,phone,userId}=this.props
    let item = { name, email, phone }
    const response = await axios.put(`http://localhost:3004/users/${userId}`, { ...item });
    this.props.fetchUsers();
  }

  render() {
    let {Itemid}=this.props
    if(!this.props.newUser) return "Loading..."
    const {name,email,phone,newUser}=this.props
  
    return (    
      <div>
        <h2 className="text-center" variant="success">User Details</h2>
          <Button variant="success" onClick={this.handleShow}>
            Add User
          </Button>
          <Table variant="warning" size="sm" >
            <tr >
              <td>UserId</td>
              <td>UserName</td>
              <td>UserEmail</td>
              <td>UserPhone</td>
            </tr>
             {newUser.map((user) => (
             <tr>
               <td>{user.id}</td>
               <td>{user.name}</td>
               <td>{user.email}</td>
               <td>{user.phone}</td>
               <td> 
                 <Link to={`/todo/${user.id}`}>
                   <Button variant="info" className="btn btn-sm">Todo
                   </Button>
                 </Link>
               </td>
               <td> 
                 <Link to={`/post/${user.id}`}>
                   <Button variant="info"  className="btn btn-sm" > Posts 
                   </Button>
                 </Link>
                </td>
               <td>
                <Link to=""> <Button variant="success" onClick={()=>this.selectUser(user.id)} 
                   className="btn btn-sm">EditUser
                 </Button></Link></td>
              </tr>
               ))}
            </Table >
               <Modal show={this.props.show} onHide={this.handleClose}>
                   <Modal.Header closeButton>
                     
                   </Modal.Header>
                   <Modal.Body>
                     <input  
                       autoComplete="none"
                       value={name}
                       type="text" 
                       onChange={(e)=>this.props.getName(e.target.value)}
                       name="name" placeholder="name"
                     /> <br/> <br />
                     <input 
                       value={email}
                       autoComplete="none"
                       type="text" 
                       onChange={(e)=>this.props.getEmail(e.target.value)} 
                       name="email" placeholder="email" 
                     /> <br/> <br />
                     <input 
                      value={phone}
                       autoComplete="none"
                       type="text" 
                      onChange={(e)=>this.props.getPhone(e.target.value)} 
                       name="phone"  placeholder="phone"
                     /> <br/><br />
                   </Modal.Body>
                       <Modal.Footer>
                         <Button variant="secondary" onClick={this.handleClose}>
                           Close
                         </Button>

                         {  Itemid > 0?
                          <Button variant="success" className="btn btn-sm" 
                            onClick={this.updateUser}>update</Button>
                                           :
                           <Button variant="success" onClick={this.props.addUsers}>
                             Save changes
                          </Button>
                           }
                       </Modal.Footer>
                  </Modal>
                    <br/>
               </div>
           )
      }
  }
       
const mapStatetoProps = (state) => {
  return {
    newUser: state.userReducer.newUser,
    name: state.userReducer.name,
    email: state.userReducer.email,
    phone: state.userReducer.phone,
    userId:state.userReducer.userId,
    show:state.userReducer.show,
    Itemid:state.userReducer.Itemid,
    data:state.userReducer.data
    }
  }

const mapDispatchtoProps = {
  getUser,
  getName,
  getEmail,
  getPhone,
  getUserId,
  getShow,
  getItem,
  fetchUsers,
  setData,
  addUsers
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Users) ;