import {useState,} from 'react'


export const CurrentUser = (props) => {


  const [currentUser,setCurrentUser] = useState([])


  return(
  <>
      <h1>{props.fname}</h1>
</>)
}
