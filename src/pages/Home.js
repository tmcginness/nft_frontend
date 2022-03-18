
    import { useState, useEffect } from 'react'
    import axios from 'axios'
    import Edit from '../components/EditNft'
    import NftCard from '../components/NftCard'
    import Modal from '../components/Modal'
    import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';
    import {  useNavigate } from "react-router-dom";



    export const Home= (props) => {

      const [nfts, setNfts] = useState([])
      const [users, setUsers] = useState([])

      const [toggle1, setToggle1] = useState(false);
      const [open, setOpen] = useState(false);

      let navigate = useNavigate();
      const goToShow= () => {
        navigate('/showNft')
      }
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
        <h1 className='title'>Home</h1>
        <div className='proContainer'>
          <div className='coverDiv'>
          <div className='infoBox'>
          <div className='infoBoxSlide' onClick= {(e) => goToShow() }>
          {nfts.map((filteredNft) => {
              return(

          <img className="nftImg2"src={filteredNft.image} alt="" />

          )}) }
          {nfts.map((filteredNft) => {
              return(

          <img className="nftImg2"src={filteredNft.image} alt="" />

          )}) }

           </div>
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
            <h2>Home</h2>
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
