import { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router";

import { CurrentUser} from "../components/CurrentUser";


 const LoginComp = (props) => {

  let user = {image :'',
  fname :'',
  lname :'',
  password :'',
  collection :'',
  created :'',
  favorited :'',
  offers :'',
  bio :''}
const [users ,setUsers] = useState(user)
const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

let navigate = useNavigate();



const [currentUser ,setCurrentUser] = useState(user)




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
        navigate('/profile', {editUser})
      })
  }
  const randomDelay = () => new Promise(resolve => setTimeout(resolve, 1000));

  const login = async () => {
    // navigate('/profile')
    console.log('this is cu '+ currentUser.bio);
      await randomDelay();
      handleUpdate(currentUser)
  }




  useEffect(() => {
    getUsers()

  }, [])

  return (
    <>

</>
  )
};
export default LoginComp
