
    import { useState, useEffect } from 'react'
    import axios from 'axios'
    import Edit from '../components/EditNft'
    import NftCard from '../components/NftCard'
    import Modal from '../components/Modal'
    import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';




    export const Home= (props) => {

      const [nfts, setNfts] = useState([])
      const [users, setUsers] = useState([])

      const [toggle1, setToggle1] = useState(false);
      const [open, setOpen] = useState(false);

        const getNfts = () => {
          axios.get('https://boiling-island-41564.herokuapp.com/api/nfts')
            .then(
              (response) => setNfts(response.data),
              (error) => console.error(error))
            .catch()
        }
      const getUsers = () => {
        axios.get('https://boiling-island-41564.herokuapp.com/api/user')
          .then(
            (response) => setUsers(response.data),
            (error) => console.error(error))
          .catch()
      }

      const [toggle2, setToggle2] = useState(false);
      const show = () => {
        setToggle2((prevState) => !prevState);
      }

      useEffect(async () => {
        getNfts()
        getUsers()

      }, [])
      return (
        <>
        <h1>Home</h1>
        <div className='proContainer'>
          <div className='coverDiv'>

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
            <h2>'s Collection</h2>
            </div>
            {nfts.map((nft) => {
              return (

                <div className="nftBox" key={nft.id}  >
                <img className="nftImg"src={nft.image} alt="" />

                <div>Name: {nft.name}</div>

                <div><h5>Price: {nft.price}</h5></div>
                <p>Description: {nft.description}</p>
                <p>Properties: [{nft.properties}]</p>


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
