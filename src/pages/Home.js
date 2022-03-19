
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
            <h2>Top NFT's Collection</h2>
            </div>

                <div className="nftBox"  >
                <img className="nftImg" src="https://i.postimg.cc/GtWKQySh/unnamed-2.png"/>
                <div><b>Name</b>: Bored Ape Yacht Club </div>
                <p><b>Description</b>: The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details. </p>
                </div>

                <div className="nftBox"  >
                <img className="nftImg" src="https://i.postimg.cc/66vm7WP5/unnamed.jpg"/>
                <div><b>Name</b>: Doodles </div>
                <p><b>Description</b>: A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury. </p>
                </div>

                <div className="nftBox"  >
                <img className="nftImg" src="https://i.postimg.cc/MGJTSKgM/unnamed-2.png"/>
                <div><b>Name</b>: Clone X </div>
                <p><b>Description</b>: 20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸</p>
                </div>

                <div className="nftBox"  >
                <img className="nftImg" src="https://i.postimg.cc/xTkTNz2N/unnamed-3.png"/>
                <div><b>Name</b>: Crypto Punks </div>
                <p><b>Description</b>: CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.</p>
                </div>


            </div>
            </div>
          </div>

        </div>




        </>
      )
    };
