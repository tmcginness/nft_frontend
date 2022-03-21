import { useState, useEffect } from 'react'
import axios from 'axios'

import NftCard from '../components/NftCard'
import Modal from '../components/Modal'
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




export const Home = (props) => {

  const [nfts, setNfts] = useState([])
  const [users, setUsers] = useState([])

  const [toggle1, setToggle1] = useState(false);
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();
  const goToShow = () => {
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
      <h1 className='title'>Top NFT Collections</h1>
      <div className='proContainer'>
        <div className='coverDiv'>
          <div className='infoBox'>
            <div className='infoBoxSlide' onClick={(e) => goToShow()}>
              {nfts.map((filteredNft) => {
                return (
                  <div key={filteredNft.id} onClick={(e) => goToShow()} >
                    <img className="nftImg2" src={filteredNft.image} alt="" />
                  </div>
                )
              })}
              {nfts.map((filteredNft) => {
                return (
                  <div key={filteredNft.id} onClick={(e) => goToShow()} >
                    <img className="nftImg2" src={filteredNft.image} alt="" />
                  </div>
                )
              })}

            </div>
          </div>

        </div>
        <div className='proContent'>

          <div className='rightContent'>
            <div className='rightTop'>

            </div>
            <div className='rightBottom'>
              <div className='rightTitle'>

              </div>

              <Card>
                <Card.Header><h3>Bored Ape Yacht Club</h3></Card.Header>
                <Card.Body>
                  <Card.Title><img className="nftImg" src="https://i.postimg.cc/GtWKQySh/unnamed-2.png" /></Card.Title>
                  <Card.Text>
                    The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.
                  </Card.Text>

                </Card.Body>
              </Card>

              <Card>
                <Card.Header><h3>Doodles</h3></Card.Header>
                <Card.Body>
                  <Card.Title><img className="nftImg" src="https://i.postimg.cc/66vm7WP5/unnamed.jpg" /></Card.Title>
                  <Card.Text>
                    A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury.
                  </Card.Text>

                </Card.Body>
              </Card>

              <Card>
                <Card.Header><h3>Clone X</h3></Card.Header>
                <Card.Body>
                  <Card.Title><img className="nftImg" src="https://i.postimg.cc/MGJTSKgM/unnamed-2.png" /></Card.Title>
                  <Card.Text>
                    20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸
                  </Card.Text>

                </Card.Body>
              </Card>

              <Card>
                <Card.Header><h3>Crypto Punks</h3></Card.Header>
                <Card.Body>
                  <Card.Title><img className="nftImg" src="https://i.postimg.cc/xTkTNz2N/unnamed-3.png" /></Card.Title>
                  <Card.Text>
                    CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.
                  </Card.Text>

                </Card.Body>
              </Card>

              <Card>
                <Card.Header><h3>Azuki</h3></Card.Header>
                <Card.Body>
                  <Card.Title><img className="nftImg" src="https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s130" /></Card.Title>
                  <Card.Text>
                    A brand for the metaverse. Built by the community. View the collection at azuki.com/gallery. Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future. Azuki holders receive access to exclusive drops, experiences, and more. Visit azuki.com for more details. We rise together. We build together. We grow together. Ready to take the red bean?
                  </Card.Text>

                </Card.Body>
              </Card>

              <Card>
                <Card.Header><h3>World Of Women</h3></Card.Header>
                <Card.Body>
                  <Card.Title><img className="nftImg" src="https://lh3.googleusercontent.com/7rQxqp2cAN4J-pFJ6A22Ncb_tm2j6Lz61zXMi9bNJbmAk8PheVXcL4zVIZptVQ8_owbOJAiYuhSbn0vtjwcE4Jg7FQqDGwZTndd-_A=s130" /></Card.Title>
                  <Card.Text>
                    A community celebrating representation, inclusivity, and equal opportunities for all. United by a first-of-its-kind collection, featuring 10,000 artworks of diverse and powerful women. Created and Illustrated by Yam Karkai (@ykarkai)
                  </Card.Text>

                </Card.Body>
              </Card>




            </div>
          </div>
        </div>

      </div>




    </>
  )
};
