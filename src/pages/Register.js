import { useState, useEffect } from 'react'
import axios from 'axios'
export const Register = () => {
  const [user, setUser] = useState({ image: "./proPic.webp" })
  const [users, setUsers] = useState([])
  const [toggle, setToggle] = useState(false);
  const getUsers = () => {
    axios.get('https://boiling-island-41564.herokuapp.com/api/user')
      .then(
        (response) => setUsers(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }
  const handleCreateUser = (addUser) => {
    axios.post('https://boiling-island-41564.herokuapp.com/api/user')
      .then((response) => {
        console.log(response);
        setUser([...user, response.data])
      })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    handleCreateUser(user)
  }
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  console.log(user);
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <div className='formBox' style={{ height: toggle ? "375px" : "40px" }}>
        <form className='form1' onSubmit={handleSubmit}>
          <div className='pairs'>
            <label htmlFor='image' > Image URL: </label>
            <input className='inputs1' type='text' name='image' value={user.image} onChange={handleChange} />
          </div>
          <div className='pairs'>
            <label htmlFor='fname' > Fname: </label>
            <input className='inputs1' type='text' name='fname' value={user.fname} onChange={handleChange} />
          </div>
          <div className='pairs'>
            <label htmlFor='lname'>lname: </label>
            <input className='inputs1' type='text' name='lname' value={user.lname} onChange={handleChange} />
          </div>
          <div className='pairs'>
            <label htmlFor='password'> password: </label>
            <input className='inputs1' type='text' name='password' value={user.password} onChange={handleChange} />
          </div>
          <input className='btn1' type='submit' />
        </form>
      </div>
      )
    }
    {users.map((user) => {
        return (
          <div key={user.id} style={{ width: '18rem' }}>
            <div>
              <div className="nft" >
                <img src={user.image} alt="" />
                <div>Name: {user.name}</div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
};