import React, { Component } from 'react'
import { Button,Modal,Table} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { GetUser,GetName,GetEmail,GetPhone,GetUserId,GetShow,GetItem } from '../redux';
import {connect} from 'react-redux'

  export class Users extends Component {    
   
   handleClose = () =>{
    this.props.GetShow(false);
  }

  handleShow = () =>{
    this.props.GetShow(true);
  }

  requestData = async () => {
    const response = await axios.get('http://localhost:3004/users');
    this.props.GetUser(response.data)
    this.props.GetName(response.data[0].name)
    this.props.GetEmail(response.data[0].email)
    this.props.GetPhone(response.data[0].phone)
    this.props.GetUserId(response.data[0].id)
 }
 
  componentDidMount() {
    this.requestData();
   
 }

   saveUser = async (e) => {
    e.preventDefault();
    const {name,email,phone}=this.props
    let data={name,email,phone};
    console.log(data);
    const res= await axios.post(' http://localhost:3004/users',{...data});
    console.log(res.data);
    alert("changes saved");
  }

  selectUser = (Id) => {
    this.props.GetShow(true)
    const {newUser}=this.props
    console.log(newUser[Id-1])
    const item=newUser[Id-1]
    this.props.GetName(item.name);
    this.props.GetEmail(item.email);
    this.props.GetPhone(item.phone);
    this.props.GetUserId(item.id);
    this.props.GetItem(item.id)
    console.log(this.props.Itemid)
   
  }
  
  UpdateUser = async () => {
    const {name,email,phone,userId}=this.props
    let item = { name, email, phone }
    console.log(name,email,phone,userId);
    const response = await axios.put(`http://localhost:3004/users/${userId}`, { ...item });
    console.log(response.data)
    this.requestData();
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
                     <Modal.Title>Add User</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                     <input  
                       autoComplete="none"
                       value={name}
                       type="text" 
                       onChange={(e)=>this.props.GetName(e.target.value)}
                       name="name" placeholder="name"
                     /> <br/> <br />
                     <input 
                     value={email}
                       autoComplete="none"
                       type="text" 
                       onChange={(e)=>this.props.GetEmail(e.target.value)} 
                       name="email" placeholder="email" 
                     /> <br/> <br />
                     <input 
                     value={phone}
                       autoComplete="none"
                       type="text" 
                      onChange={(e)=>this.props.GetPhone(e.target.value)} 
                       name="phone"  placeholder="phone"
                     /> <br/><br />
                   </Modal.Body>
                       <Modal.Footer>
                         <Button variant="secondary" onClick={this.handleClose}>
                           Close
                         </Button>

                         {  Itemid>0?
                          <Button variant="success" className="btn btn-sm" 
                            onClick={this.UpdateUser}>update</Button>
         
                                       :
                          <Button variant="success" onClick={this.saveUser}>
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
    Itemid:state.userReducer.Itemid
    }
  }

const mapDispatchtoProps = {
  GetUser,
  GetName,
  GetEmail,
  GetPhone,
  GetUserId,
  GetShow,
  GetItem
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Users) ;