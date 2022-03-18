import { useState, useEffect } from 'react'
import axios from 'axios'
import Edit from '../components/EditNft'
import NftCard from '../components/NftCard'
import Modal from '../components/Modal'
import Collections from '../components/Collections'
import { FcSearch } from 'react-icons/fc';


export const ShowNft = () => {

  const [nfts, setNfts] = useState([])

  const [toggle1, setToggle1] = useState(false);
  const [open, setOpen] = useState(false);


  const [name, setName] = useState("");
  const [collection, setCollection] = useState("ANY");
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  // let results = []

  const getNfts = () => {
    axios.get('https://boiling-island-41564.herokuapp.com/api/nfts')
      .then(
        (response) => setNfts(response.data),
        (error) => console.error(error))
      .catch()
  }

  const show = () => {
    setToggle1((prevState) => !prevState);
  }
  const handleCreate = (addNft) => {
    axios.post('https://boiling-island-41564.herokuapp.com/api/nfts', addNft)
      .then((response) => {
        console.log(response);
        setNfts([...nfts, response.data])
    })
  }

  const handleDelete = (e) => {
    axios.delete('https://boiling-island-41564.herokuapp.com/api/nfts/' + e.target.value)
      .then((response) => {
        getNfts()
      })
  }

  const handleUpdate = (editNft) => {
    axios.put('https://boiling-island-41564.herokuapp.com/api/nfts/' + editNft.id, editNft)
      .then((response) => {
        setNfts(nfts.map((nft) => {
          return nft.id !== editNft.id ? nft : editNft
        }))
      })
  }

  const handleSearch = async (e) => {
      e.preventDefault();
      getNfts()
      if (name !== "") {

        nfts.map((nft) => {
          if (nft.name== name){

            // setResults( ...results, [nft])
            results.push(nft)
            console.log('here '+ results);
          }
        })
      }
      if (collection !== "ANY") {
        nfts.map((nft) => {
          if (nft.collection== collection){
            // setResults(nft)
            results.push(nft)
          }
        })
      }else if (collection == "ANY") {
        nfts.map((nft) => {
            results.push(nft)

          })}
      if (results.length <0) {
        setNoResults(false);

      } else {
        setNoResults(true);

        console.log('results len '+ results.length);
      }
    };
console.log('results len '+ results.length);

console.log('here '+ collection);
  useEffect(() => {
    getNfts()

  }, [])
  // <img src={nft.image} alt="" />
  //
  // <div>Name: {nft.name}</div>
  //
  // <div><h5>Price: {nft.price}</h5></div>
  // <p>Description: {nft.description}</p>
  // <p>Properties: [{nft.properties}]</p>
  // <NftCard nft={nft} />
  // <Edit handleUpdate={handleUpdate} nft={nft} />
  // <button onClick={handleDelete} value={nft.id}>Delete</button>

  return (
    <>

      <h1>Show NFTs</h1>
      <div className="searchContainer">
        <form action="">
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit">< FcSearch /></button>
        </form>
      </div>

      <div className="searchFormBox">
          <form className="searchForm">
            <div className="pairs">
              <label htmlFor="name">Name</label>
              <input
                className="input"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="pairs">
              <label htmlFor="genre">Collection</label>
              <select
                className="input"
                value={collection}
                onChange={(e) => setCollection(e.target.value)}
              >
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
            <button className="buttForm1" onClick={handleSearch}>
              Search
            </button>
          </form>
        </div>


        {  noResults ?
          <div>
          <h1>results</h1>
          <div className="cardContainer">
          {results.map((nft, index) => {
           return(
             <div className="nftBox" key={nft.id}   >
               <NftCard nft={nft} />

               </div>


          )}) }
          </div>
          </div>
        :

         <>
         <div className="cardContainer">
           {nfts.map((nft) => {
             return (
               <div className="nftBox" key={nft.id}  >
                 <NftCard nft={nft} />
                 <Edit handleUpdate={handleUpdate} nft={nft} />
                 </div>          )
           })}
         </div>



        </>
      }



    </>
  )
};
