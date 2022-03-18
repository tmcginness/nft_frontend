import { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router";
import { UserContext } from '../Contexts/UserContext'
import { CurrentUser} from "../components/CurrentUser";
import {Link} from 'react-router-dom';


export const Login = (props) => {

  let user = {image :'',
  fname :'',
  lname :'',
  password :'',
  collection :'',
  created :'',
  favorited :'',
  offers :'',
  bio :''}
const [userA ,setUserA] = useState(user)
const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const [users ,setUsers] = useState(user)
let navigate = useNavigate();



const [currentUser,setCurrentUser] = useState([])




  const getUsers = () => {
    axios.get('https://boiling-island-41564.herokuapp.com/api/user')
    .then(
      (response) => setUsers(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))

  }

  const handleUpdate = (editUser) => {
    axios.put('https://boiling-island-41564.herokuapp.com/api/user/' + editUser.id, editUser)
      .then((response) => {
        alert('logged in')
        navigate('/profile', currentUser)
      })
  }
  const randomDelay = () => new Promise(resolve => setTimeout(resolve, 1000));

  const login = async () => {
    // navigate('/profile')
    // console.log('this is '+ user.bio)
    // setCurrentUser({ ...user, bio: 'currentUser'})
      handleUpdate(currentUser)
  }

  const logout = (editUser) => {
    axios.put('https://boiling-island-41564.herokuapp.com/api/user/' + editUser.id, editUser)
      .then((response) => {
        // alert('logged out')
        console.log('logged out');
        navigate('/login')
      })
  }
  const loggedOut = async () => {
    console.log('logged out');
    console.log(users.id);
    logout(currentUser)
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      getUsers()
      console.log('submit hit');
      // attempt to login
      users.map( (user)  =>  {

        if(user.fname === username && user.password == password){
          getUsers()
             setCurrentUser({ ...user, bio: 'currentUser'})
             console.log('this is cu '+ currentUser.bio)
             if(currentUser.bio== undefined){
               handleSubmit()
             }else {

            console.log('this is now '+ currentUser.bio)
            login()
             }

       }
         if(user.bio == 'currentUser'){
           setCurrentUser({ ...user, bio: 'false'})
           const response =  loggedOut()
           console.log('submit hit');
         }


      })





      // if successful, move to home page

      // if unsuccessful, redirect back to login with error message
    };


  useEffect(() => {
    getUsers()

  }, [])

  return (
    <>
    <h1>Login</h1>


    <Link to={{
      pathname: '/profile',
      state: {id: 1, name: 'sabaoon', shirt: 'green'}
    }} >Learn More</Link>


    <form onSubmit={handleSubmit}>
              <div className="formBox">
                <div className="pairs">
                  UserName:{" "}
                  <input
                    className="input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="pairs">
                  Password:{" "}
                  <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input className="buttForm1" type='submit' value='Login'onClick= {(e) => handleSubmit} />
                  <button className='buttForm2' onClick= {(e) => navigate('/register')}>Register</button>
                </div>
              </div>
            </form>

</>
  )
};
