import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import NftCard from '../components/NftCard'
import Modal from '../components/Modal'
import { UserContext } from '../Contexts/UserContext'
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';




export const Profile = (props) => {

  const [nfts, setNfts] = useState([])
  const [userNfts, setUserNfts] = useState([])
  // const [currentUser, setCurrentUser] = useState([])
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [toggle1, setToggle1] = useState(false);
  const [open, setOpen] = useState(false);

  const [currentUser, setCurrentUser] = useContext(UserContext)

  let navigate = useNavigate();


  // console.log('profile user ' + currentUser.fname);

  const getNfts = () => {
    axios.get('https://boiling-island-41564.herokuapp.com/api/nfts')
      .then(
        (response) => setNfts(response.data),
        (error) => console.error(error))
      .catch()
  }

  // axios.get("api/blogs/" + this.state.pageIndex + "/10").then(
  //   res => {
  //   res.filter(function(author) {
  //     return author.firstName === this.state.query;
  //   });
  // });

  // const getUserNfts = async () => {
  //
  //   const response = await users.map((user) => {
  //     if (user.bio == 'currentUser'){
  //     // setCurrentUser(user)
  //     // return setCurrentUser(user)
  //     console.log('profile ' + currentUser.fname );
  //
  //     // console.log('this is the user ' + user.fname);
  //
  //     }
  //   })
  //   axios.get('https://boiling-island-41564.herokuapp.com/api/nfts')
  //     .then((response) => {
  //       setUserNfts(nfts.map((nft) => {
  //         return nft.owner  == currentUser.fname ? nft : null
  //       }))
  //     })
  // }

  // console.log('profile ' + currUser);

  const handleUpdate = (editNft) => {
    axios.put('https://boiling-island-41564.herokuapp.com/api/nfts/' + editNft.id, editNft)
      .then((response) => {
        setNfts(nfts.map((nft) => {
          return nft.id !== editNft.id ? nft : editNft
        }))
      })
  }

  const handleDelete = (e) => {
    axios.delete('https://boiling-island-41564.herokuapp.com/api/nfts/' + e.target.value)
      .then((response) => {
        getNfts()
      })
  }

  const goToShow = () => {
    navigate('/showNft')
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
      // getCurUsers()
      // setCurrentUser(currUser)
      setIsLoading(false);
    }, [])

  return (
    <div  >
      {!isLoading && (
        <>
          {users.map((user) => {
            return (
              <div key={user.id}>
                {user.bio == 'currentUser' ?
                  <>
                    <div className='proContainer'>
                      <h1 className='title'>Profile</h1>
                      <div className='coverDiv'>
                        <div className='infoBox'>
                          <div className='infoBoxSlide' onClick={(e) => goToShow()}>
                            {nfts.map((filteredNft) => {
                              return (
                                <img className="nftImg2" src={filteredNft.image} alt="" />
                              )
                            }
                            )}
                            {nfts.map((filteredNft) => {
                              return (
                                <img className="nftImg2" src={filteredNft.image} alt="" />
                              )
                            }
                            )}
                          </div>
                        </div>
                        <div className='proPicDiv'>
                          <img className='proPic' src={user.image} />
                        </div>
                      </div>
                      <div className='proContent'>
                        <div className='leftContent' style={{ width: toggle2 ? "500px" : "100px" }}>
                          <div className="iconArrowDiv" onClick={(event) => show()}>
                            {toggle2 ? <IoMdArrowDropleftCircle className="iconArrow" /> : <IoMdArrowDroprightCircle className="iconArrow" />}
                          </div>
                          <div className='yourData' style={{ marginLeft: toggle2 ? "10px" : "100px" }}>
                            <h2>Your Data</h2>
                            <div className='dataContent'>
                              Your Data
                {nfts.filter(nft => nft.owner == currentUser.fname).map(filteredNft => (
                                <div className="nftBox2" key={filteredNft.id}  >
                                  <img className="nftImg" src={filteredNft.image} alt="" />
                                  <div>
                                    Name: {filteredNft.name}
                                  </div>
                                </div>
                              ))}
                            </div>
                            {users.map((u) => {
                              return (
                                <div className='dataContent'>
                                  <div className='infoName'>
                                    <h2>{u.fname}'s Collection</h2>
                                  </div>
                                  <div className='infoBox3'>
                                    {nfts.filter(nft => nft.owner == u.fname).map(filteredNft => (
                                      <div className="nftBox3" key={filteredNft.id}  >
                                        <img className="nftImg3" src={filteredNft.image} alt="" />
                                      </div>
                                    ))
                                    }
                                  </div>
                                </div>
                              )
                            }
                            )}
                          </div>
                        </div>
                        <div className='rightContent'>
                          <div className='rightTop'>
                          </div>
                          <div className='rightBottom'>
                            <div className='rightTitle'>
                              <h2><span className='namePro'>{user.fname}'s</span> Collection</h2>
                            </div>
                            {nfts.filter(nft => nft.owner == currentUser.fname).map(filteredNft => (
                              <div className="nftBox" key={filteredNft.id}  >
                                <NftCard handleUpdate={handleUpdate} nft={filteredNft} />
                                <button className='btn1' onClick={handleDelete} value={filteredNft.id}>Delete</button>
                              </div>
                            )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                  : <div>
                  </div>
                }
              </div>
            )
          })}
        </>
      )}
    </div>
  )
};