import {useState, createContext} from 'react'

import axios from 'axios'

export const UserProvider = (props) => {

  const [user, setUser] = useState("");
  const [currentUser ,setCurrentUser] = useState([{
      image :'',
      fname :'',
      lname :'',
      password :'',
      collection :'',
      created :'',
      favorited :'',
      offers :'',
      bio :'',

  }])
  const getUsers = () => {
    axios.get('https://boiling-island-41564.herokuapp.com/api/user')
    .then(
      (response) => setUser(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
    user.map((user) => {
      if (user.bio == 'currentUser'){
      // setCurrentUser(user)
      setCurrentUser(user)
      }
    })
  }

  return (
    <UserContext.Provider
    value={[currentUser, setCurrentUser]}>{props.children}

    </UserContext.Provider>
  )
}

export const UserContext = createContext()
