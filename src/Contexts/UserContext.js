import {useState, createContext, useEffect} from 'react'

import axios from 'axios'

export const UserProvider = (props) => {

  const [user, setUser] = useState("");
  const [currentUser ,setCurrentUser] = useState(user)



  const getUsers = () => {
    axios.get('https://boiling-island-41564.herokuapp.com/api/user')
    .then(
      (response) =>
      response.data.map((user) => {
        if (user.bio === 'currentUser'){
        // setCurrentUser(user)
        setCurrentUser(user)
        }
      }),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
  }


  useEffect(() => {
    getUsers()

  }, [])

  return (
    <UserContext.Provider
    value={[currentUser, setCurrentUser]}>{props.children}

    </UserContext.Provider>
  )
}

export const UserContext = createContext()
