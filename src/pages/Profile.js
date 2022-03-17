import { useState, useEffect } from 'react'
import axios from 'axios'
import Edit from '../components/EditNft'
import NftCard from '../components/NftCard'
import Modal from '../components/Modal'
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';




export const Profile= () => {

  const [nfts, setNfts] = useState([])

  const [toggle1, setToggle1] = useState(false);
  const [open, setOpen] = useState(false);
  const getNfts = () => {
    axios.get('https://boiling-island-41564.herokuapp.com/api/nfts')
      .then(
        (response) => setNfts(response.data),
        (error) => console.error(error))
      .catch()

  }
  const handleUpdate = (editNft) => {
    axios.put('https://boiling-island-41564.herokuapp.com/api/nfts/' + editNft.id, editNft)
      .then((response) => {
        setNfts(nfts.map((nft) => {
          return nft.id !== editNft.id ? nft : editNft
        }))
      })
  }




  const [toggle2, setToggle2] = useState(false);
  const show = () => {
    setToggle2((prevState) => !prevState);
  }

  useEffect(() => {
    getNfts()

  }, [])
  return (
    <>
    <h1>Profile</h1>
    <div className='proContainer'>
      <div className='coverDiv'>
        <div className='proPicDiv'>
          <img className='proPic' src= '../../proPic.webp'/>
        </div>
      </div>
      <div className='proContent'>
        <div className='leftContent' style={{ width: toggle2 ? "500px" : "50px" }}>
        <div className="iconArrowDiv" onClick={(event) => show()}>
          {toggle2 ? <IoMdArrowDropleftCircle className="iconArrow"/> : <IoMdArrowDroprightCircle className="iconArrow" /> }
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
        <h2>My Collection</h2>
        </div>
        {nfts.map((nft) => {
          return (
            <div className="nftBox" key={nft.id}  >
              <NftCard nft={nft} />
              <Edit handleUpdate={handleUpdate} nft={nft} />
              </div>

          )
        })}
        </div>
        </div>
      </div>

    </div>
    </>
  )
};
