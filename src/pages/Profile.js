import { useState, useEffect } from 'react'
import axios from 'axios'
import Edit from '../components/EditNft'
import NftCard from '../components/NftCard'
import Modal from '../components/Modal'

import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';




export const Profile = (props) => {

  const [nfts, setNfts] = useState([])
  const [userNfts, setUserNfts] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [users, setUsers] = useState([])
  let currUser = ''
  const [isLoading, setIsLoading] = useState(true);

  const [toggle1, setToggle1] = useState(false);
  const [open, setOpen] = useState(false);


  const getNfts = () => {
    axios.get('https://boiling-island-41564.herokuapp.com/api/nfts')
      .then(
        (response) => setNfts(response.data),
        (error) => console.error(error))
      .catch()
  }


  const getUserNfts = async () => {

    const response = await users.map((user) => {
      if (user.bio == 'currentUser') {
        // setCurrentUser(user)
        return setCurrentUser(user)
        console.log('profile ' + currentUser.fname);

        // console.log('this is the user ' + user.fname);

      }
    })
    axios.get('https://boiling-island-41564.herokuapp.com/api/nfts')
      .then((response) => {
        setUserNfts(nfts.map((nft) => {
          return nft.owner == currentUser.fname ? nft : null
        }))
      })
  }


  // console.log('profile ' + currUser);

  const handleUpdate = (editNft) => {
    axios.put('https://boiling-island-41564.herokuapp.com/api/nfts/' + editNft.id, editNft)
      .then((response) => {
        setNfts(nfts.map((nft) => {
          return nft.id !== editNft.id ? nft : editNft
        }))
      })
  }

  const getUsers = () => {
    axios.get('https://boiling-island-41564.herokuapp.com/api/user')
      .then(
        (response) => setUsers(response.data),
        (error) => console.error(error))
      .catch()

  }
  // console.log('this is current in Porfile '+ currentUser.fname);
  const [toggle2, setToggle2] = useState(false);
  const show = () => {
    setToggle2((prevState) => !prevState);
  }

  useEffect(
    async () => {
      getNfts()
      getUsers()
      setCurrentUser(currUser)
      getUserNfts()
      const response = await users.map((user) => {
        if (user.bio == 'currentUser') {
          // setCurrentUser(user)
          return setCurrentUser(user)

          // console.log('this is the user ' + user.fname);

        }
      })


      console.log('profile ' + currentUser.fname);
      setIsLoading(false);
    }, [])
  return (
    <>
      {!isLoading && (
        <>
          {users.map((user) => {
            return (
              <div key={user.id}>
                {user.bio == 'currentUser' ?
                  <>
                    <h1>Profile</h1>
                    <div className='proContainer'>
                      <div className='coverDiv'>
                        <div className='proPicDiv'>
                          <img className='proPic' src={user.image} />
                        </div>
                      </div>
                      <div className='proContent'>
                        <div className='leftContent' style={{ width: toggle2 ? "500px" : "50px" }}>
                          <div className="iconArrowDiv" onClick={(event) => show()}>
                            {toggle2 ? <IoMdArrowDropleftCircle className="iconArrow" /> : <IoMdArrowDroprightCircle className="iconArrow" />}
                          </div>
                          <div className='yourData' style={{ marginLeft: toggle2 ? "10px" : "50px" }}>
                            <h2>Your Data</h2>
                            <div className='dataContent'>
                              Your Data
        </div>
                            <div className='dataContent'>
                              Your Data
        </div>
                            <div className='dataContent'>
                              Your Data
        </div>
                            <div className='dataContent'>
                              Your Data
        </div>
                          </div>
                        </div>
                        <div className='rightContent'>
                          <div className='rightTop'>

                          </div>
                          <div className='rightBottom'>
                            <div className='rightTitle'>
                              <h2>{user.fname}'s Collection</h2>
                            </div>
                            {nfts.map((nft) => {
                              return (

                                <div className="nftBox" key={nft.id}  >
                                  <NftCard handleUpdate={handleUpdate} nft={nft} />

                                </div>

                              )
                            })}
                          </div>
                        </div>
                      </div>

                    </div>
                  </>
                  : <div></div>}
              </div>
            )
          })}
        </>
      )}
    </>
  )
};