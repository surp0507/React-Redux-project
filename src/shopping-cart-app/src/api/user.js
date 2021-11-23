import _users from './users.json'
const TIMEOUT = 100
export default {
   
    loggedIn:(cb,timeout)=>setTimeout(()=>{
        cb(_users)
    },timeout||TIMEOUT),
    loggedOut:(cb, timeout)=>setTimeout(()=>{
        cb()
    },timeout||TIMEOUT)
}