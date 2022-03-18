import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const Register = () => {



  
  const [user ,setUser] = useState({ image: "./proPic.webp" })
  const [users ,setUsers] = useState([])
  const [toggle, setToggle] = useState(false);
  const [password ,setPassword] = useState('')
  const [confirmPass ,setConfirmPass] = useState('')
  let navigate = useNavigate();


const getUsers = () => {
  axios.get('https://boiling-island-41564.herokuapp.com/api/user')
  .then(
    (response) => setUsers(response.data),
    (err) => console.error(err)
  )
  .catch((error) => console.error(error))

}




const handleCreateUser = (addUser) => {
     axios.post('https://boiling-island-41564.herokuapp.com/api/user', addUser)
     .then((response) => {
       console.log(response);
       setUser([...user, response.data])
     })
     navigate('/login')
   }
   const handleSubmit = (event) => {
     event.preventDefault()
     // perform all neccassary validations
     if (password !== confirmPass) {
         alert("Passwords don't match");
     } else {
     handleCreateUser(user)
   }
   }
   const handleChange = (event) => {
     setUser({...user, [event.target.name]: event.target.value})
   }
   const handlePass= (event) => {
     setPassword(event.target.value)
     setUser({...user, [event.target.name]: event.target.value})
   }
   const handleConfirmPass= (event) => {
     setConfirmPass(event.target.value)

   }



console.log(user);
useEffect(() => {
  getUsers()

}, [])


// <div className='pairs'>
// <label htmlFor = 'password'> password: </label>
// <input className='inputs1'  type='password' name='password' defaultValue={user.password} onChange={handleChange} required/>
// </div>
// <div className='pairs'>
// <label htmlFor = 'rePassword'> rePassword: </label>
// <input className='inputs1'  type='password' name='rePassword'  onChange={handleVerify} required/>
// </div>
  return(
    <>
          <div className='formBox' >

            <form className='form1' onSubmit = {handleSubmit}>
              <div className='pairs'>
              <label htmlFor = 'image' > Image URL: </label>
              <input className='inputs1' type='text' name='image' defaultValue={user.image} onChange={handleChange} required/>
              </div>
              <div className='pairs'>
              <label htmlFor = 'fname' > Fname: </label>
              <input className='inputs1' type='text' name='fname' defaultValue={user.fname} onChange={handleChange} required/>
              </div>
              <div className='pairs'>
              <label htmlFor = 'lname'>lname: </label>
              <input className='inputs1'  type='text' name='lname' defaultValue={user.lname} onChange={handleChange} required/>
              </div>

              <input id="password" name="password" type="password" defaultValue={user.password} pattern="^\S{6,}$" onChange= {handlePass} placeholder="Password" required/>

              <input id="password_two" name="password_two" type="password" pattern="^\S{6,}$" onChange={handleConfirmPass} placeholder="Verify Password" required/>

              <input className='btn1'  type='submit' />
            </form>
          </div>


    <div>Users</div>
    {users.map((user) => {
            return (
        <div key={user.id} style={{ width: '18rem' }}>
          <div>

            <div className="nft" >
              <img src={user.image} alt="" />

              <div>Name: {user.fname}</div>
            </div>
          </div>
        </div>
      )
    })}
    </>
  )
};
