import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";
import NftCard from '../components/NftCard'
import Modal from '../components/Modal'
import { UserContext } from '../Contexts/UserContext'
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';
import { IoHome } from 'react-icons/io5';



export const UserPage = (props) => {

  const [nfts, setNfts] = useState([])
  const [userNfts, setUserNfts] = useState([])

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [toggle1, setToggle1] = useState(false);
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);



  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  let navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(location.state.name1)

  // console.log('profile user ' + currentUser.fname);

  const getNfts = () => {
    axios.get('https://boiling-island-41564.herokuapp.com/api/nfts')
      .then(
        (response) => setNfts(response.data),
        (error) => console.error(error))
      .catch()
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

  console.log('user name ' + user);

  useEffect(
    async () => {

      getNfts()
      getUsers()
      // getCurUsers()
      // setCurrentUser(currUser)

      setIsLoading(false);
      window
        .matchMedia("(min-width: 768px)")
        .addEventListener("change", (e) => setMatches(e.matches));
    }, [])

  return (
    <div  >
      {!isLoading && (
        <>
          {users.map((user1) => {
            return (
              <div key={user1.id}>
                {user1.fname == user ?
                  <>
                    <div className='proContainer'>
                      <h1 className='title'><span className='namePro'>{user1.fname}'s </span>Collection</h1>
                      <div className='coverDiv'>

                        <div className='infoBox'>
                          <div className='infoBoxSlide' onClick={(e) => goToShow()}>
                            {nfts.map((filteredNft) => {
                              return (
                                <div key={filteredNft.id} onClick={(e) => goToShow()} >
                                  <img className="nftImg2" src={filteredNft.image} alt="" />
                                </div>
                              )
                            }
                            )}
                            {nfts.map((filteredNft) => {
                              return (
                                <div key={filteredNft.id} onClick={(e) => goToShow()} >
                                  <img className="nftImg2" src={filteredNft.image} alt="" />
                                </div>
                              )
                            }
                            )}
                          </div>
                        </div>

                      </div>

                      <div className='proContent'>


                        <div className='rightContent' style={{ backgroundColor: toggle ? "red" : "" }}>
                          <div className='rightTop'>
                            <div className='proPicDiv'>
                              <img className='proPic' src={user1.image} />
                            </div>
                            <button className='returnHome btn2' onClick={(e) => navigate('/profile')}>
                              <IoHome />
                              Home
                           </button>
                          </div>
                          <div className='rightBottom'>

                            {nfts.filter(nft => nft.owner == user1.fname).map(filteredNft => (
                              <div className="nftBoxHide" key={filteredNft.id}  >
                                <NftCard nft={filteredNft} />
                              </div>)

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
