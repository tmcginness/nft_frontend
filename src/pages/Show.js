import { useState, useEffect } from 'react'
import axios from 'axios'
import Edit from '../components/EditNft'
import NftCard from '../components/NftCard'
import Modal from '../components/Modal'
import Collections from '../components/Collections'
import { FcSearch } from 'react-icons/fc';


const ShowNft = (props) => {

  const [nfts, setNfts] = useState([])

  const [toggle1, setToggle1] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("")


  const [name, setName] = useState("");
  const [collection, setCollection] = useState("ANY");


  const getNfts = () => {
    axios.get('https://boiling-island-41564.herokuapp.com/api/nfts')
      .then(
        (response) => setNfts(response.data),
        (error) => console.error(error))
      .catch()
  }

  useEffect(() => {
    getNfts()

  }, [])



  return (
    <>


      <h1 className="title">Looking For An NFT? Check Out Below!</h1>
      <div className="searchBar">
        <input className="inputEdit" placeholder="Search For An NFT Name, Collection, or Property" onChange={event => setQuery(event.target.value)} />

      <div className='pair1'>
        <label htmlFor='properties'>Collections:</label>
        <select
          className="inputEdit"
          value={props.nft.collection}
          onChange={event => setCollection(event.target.value)}>
          <option key="select-ANY" value="ANY">
            ANY
          </option>
          {Collections.map((col) => (
            <option key={"select-" + col} value={col}>
              {col}
            </option>
          ))}
        </select>
        </div>
        </div>
        <h2> Search Results </h2>
      <div className="cardContainer">
        {props.nft.filter(nft => {

          if(collection==="ANY"){
            if (query === '') {
              return nft;
            }  else if (nft.name !== null && nft.name.toLowerCase().includes(query.toLowerCase()) || nft.collection!== null &&  nft.collection.toLowerCase().includes(query.toLowerCase()) || nft.properties != null && nft.properties.toLowerCase().includes(query.toLowerCase())) {
              return nft;
            }
        }else if(collection == nft.collection && (nft.name !== null && nft.name.toLowerCase().includes(query.toLowerCase()) || nft.properties != null && nft.properties.toLowerCase().includes(query.toLowerCase()) ) ){
          console.log('we here' + collection + nft.collection);
          return nft;
        }


        }).map((nft) => {
          return (
            <div className="nftBoxHide" key={nft.id}  >
              <NftCard nft={nft} />
            </div>
            )
          }
        )}
      </div>
    </>
  )
};

export default ShowNft;
